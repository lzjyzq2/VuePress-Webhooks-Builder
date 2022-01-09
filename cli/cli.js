#!/usr/bin/env node
const program = require('commander');

program.version(`Vuepress-Webhook-Server ${require('../package').version}`)
    .usage('<command> [options]');
program.command("run")
    .description("run server work in current directory")
    .action(() => {
        require('../index')
    })
program.command("user")
    .option("-add,-a")
    .option("-remove,-r")
    .option("-disable,-d")
program.parse(process.argv);