import Ora from 'ora';
import { Project } from 'ts-morph';

function fixLodash(path: string) {
  const ora = Ora();
  ora.succeed('自动修复 lodash 引用:' + path);
  const project = new Project();
  project.addExistingSourceFiles(path);
  const sourceFiles = project.getSourceFiles(path);
  sourceFiles.forEach(file => {
    const imports = file.getImportDeclarations().filter(d => {
      const name = d
        .getModuleSpecifier()
        .getText()
        .replace(/^'|'$/g, '');
      return name === 'lodash';
    });

    if (imports.length > 0) {
      const filePath = file.getFilePath();
      imports.forEach(d => {
        d.getNamedImports().forEach(e => {
          const name = e.getName();
          file.addImportDeclaration({
            defaultImport: name,
            moduleSpecifier: `lodash/${name}`
          });
        });
      });
      imports.forEach(imp => imp.remove());
      file.save();
      ora.succeed(filePath);
    }
  });
  ora.stop();
}

fixLodash('apps/*/src/**/*.ts');
fixLodash('libs/**/src/**/*.ts');
