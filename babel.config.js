const presets = [
  [
    "@babel/env",
    {
      targets: ">1%, not op_mini",
      useBuiltIns: "usage"
    }
  ]
]

module.exports = { presets }