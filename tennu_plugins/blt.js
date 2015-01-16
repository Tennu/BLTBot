var BLTPlugin = {
    init: function (client, imports) {
        return {
            handlers: {
                '!givemeblt': function (command) {
                    client.act(command.channel, 'gives a juicy BLT to ' + command.nickname);
                }
            },

            help: {
                'givemeblt': [
                    '{{!}}givemeblt',
                    'Gives the requestor a juicy BLT.'
                ]
            },

            commands: ['givemeblt']
        }
    }
};

module.exports = BLTPlugin;

