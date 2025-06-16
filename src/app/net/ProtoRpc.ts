export class ProtoRpc<T> {
  constructor(private serializer: (buffer: Uint8Array) => T) {}

  fetch(path: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.open('GET', path, true);
      request.responseType = 'arraybuffer';

      request.onload = (event: Event): any => {
        if (request.status === 200) {
          resolve(this.serializer(new Uint8Array(request.response)));
        }
      };

      request.onerror = (event: Event): any => {
        reject({
          status: request.status,
          Message: request.statusText,
        });
      };

      request.send();
    });
  }
}
