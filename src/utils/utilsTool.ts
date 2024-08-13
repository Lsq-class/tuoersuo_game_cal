export const readBuffer = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (loadEvent) => resolve(loadEvent.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsArrayBuffer(file);
    });
  };
  
  export function getExtend(name) {
    const dot = name.lastIndexOf('.');
    return name.substr(dot + 1);
  }
  