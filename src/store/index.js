//拿到modules下的所有文件
//vite5中import.meta.globEager已经被废弃，改成使用import.meta.glob('*', { eager: true })
const modulesFiles = import.meta.glob('./modules/*.*',{ eager: true });
const modules = {};

for (const key in modulesFiles) {
    const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
    modules[moduleName] =  modulesFiles[key];
    console.log("moduleName",moduleName);
}

export default modules;
