export const getNodeKey = key => `${key}-root`

export const validateAppParams = (key, params) => {
  const errors = [{
    cond: !params.main,
    msg: `App "${key}" should have an existing "main" key`
  }, {
    cond: typeof params.nodeKey !== 'string',
    msg: `App "${key}" should have a string "nodeKey"`
  }, {
    cond: !params.flags || typeof params.flags !== 'object',
    msg: `App "${key}" should have an object in its "flags" key`
  }, {
    cond: !Array.isArray(params.ports),
    msg: `App "${key}" should have an Array in its "ports" keys`
  }].filter(x => x.cond)

  if (errors.length > 0) {
    const err = new Error('There are multiple errors in your App params !')
    errors.forEach(({ msg }, idx) => {
      err[`Error_N${idx + 1}`] = msg
    })
    throw err
  }
}

export const initializeModule = Module => {
  validateAppParams(Module.nodeKey || 'unknown', Module)

  const app = Module.main.init({
    node: document.getElementById(getNodeKey(Module.nodeKey)),
    flags: Module.flags
  })

  Module.ports.forEach(bindPort => bindPort(app))
}
