class Mask {
  public formatBase64(base64: string, format = 'webp'): string {
    return `data:image/${format};base64,${base64}`;
  }

  public stringRedutor(string: string, stringLength: number): string {
    if (!string) {
      return 'título';
    }

    if (string.length > stringLength - 1) {
      return string.substring(0, stringLength - 1).concat('...');
    }

    return string;
  }
}

export default new Mask();
