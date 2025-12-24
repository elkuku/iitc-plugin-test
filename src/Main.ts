import * as Plugin from "iitcpluginkit";


class IitcPluginTest implements Plugin.Class {

    init() {
        console.log("IitcPluginTest " + VERSION);

        // eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-require-imports
       // require("./styles.css");

        // FILL ME
        alert('Hello IitcPluginTest');
    }

}

Plugin.Register(new IitcPluginTest(), "IitcPluginTest");
