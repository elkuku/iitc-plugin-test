import * as Plugin from "iitcpluginkit";


class IitcPluginTest implements Plugin.Class {

    init() {
        console.log("IitcPluginTest " + VERSION);

        // eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-require-imports
        require("./styles.css");

        // FILL ME
    }

}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.IitcPluginTest)
 */
export const main = new IitcPluginTest();
Plugin.Register(main, "IitcPluginTest");
