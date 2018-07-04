import { Logger } from "@nestjs/common";

function loadPackageTest(packagesName: Array<string>) {
    const logger = new Logger("PackageLoader");

    packagesName.forEach(item => {
        try {
           require(item);
        } catch (error) {
            logger.error(`The "${item}" package is missing. Please run 'npm install ${item}').`);
        }
    });
}

loadPackageTest(["@notadd/addon-sms", "@nestjs/common"]);

