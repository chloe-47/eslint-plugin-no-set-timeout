module.exports = {
  rules: {
    'no-set-timeout': {
      create: function (context) {
        return {
          CallExpression(node) {
            if (
              node.callee.type === 'Identifier' &&
              node.callee.name === 'setTimeout'
            ) {
              context.report(
                node.callee,
                'Use setTimeoutSafe instead of setTimeout',
              );
            }
          },
        };
      },
    },
  },
};
