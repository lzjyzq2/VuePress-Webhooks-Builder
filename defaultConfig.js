module.exports = {
    validators: {
        "github": "./validator/github.js",
        "gitea": "./validator/gitea.js"
    },
    options: {

        // 端口号
        port: 3000,
        // 是否需要验证
        requireLogin:false,
        // 验证Token
        accessToken:"",

        // 是否开启日志
        log: true,
        // 日志格式
        logFormatter: "[[time]]:[[level]]: [message]",
        // 日志时间格式
        logTimeFormatter: "yyyy-MM-dd hh:mm:ss",
        // 日志存储位置
        logStorage: "./log/log.log",

        email:null,

        // 任务
        tasks:[
            {
                name:"example",

                public: "./docs/.vuepress/dist",

                url: "/",

                key: "document-key-adihwwd3445ada",
        
                platform: "github",
        
                method: "POST",
        
                type: "json",
        
                customUrl: "/webhook",
             
                docs:"./docs",
                
                workPath:process.cwd(),
                
                buildCmd:"docs:build",
        
                responseSucc: {
                    code: 200,
                    message: "start pull"
                },
        
                responseFail: {
                    code: 400,
                    message: "validation failed"
                },
                responseErr: {
                    code: 500,
                    message: "wrong request"
                },
                git: "",
            }
        ],

    }
}