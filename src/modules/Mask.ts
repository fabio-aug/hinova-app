class Mask {
  public masks = {
    phone: '(##) ####-####',
    cpf: '###.###.###-##',
  };

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

  public unmask(text: string) {
    return text.replace(/\./g, '').replace(/-/g, '')
      .replace(/\//g, '').replace(/\(/g, '')
      .replace(/\)/g, '').replace(/:/g, '')
      .replace(/ /g, '').replace(/,/g, '');
  }

  public applyMask(mask: string, text: string) {
    if (mask?.length > 0 && text?.length > 0) {
      text = this.unmask(text);
      let out = '';
      let i = 0;
      let j = 0;
      while (i < mask.length && j < text.length) {
        if (mask[i] === '#') {
          out += text[j];
          j++;
        } else {
          out += mask[i];
        }
        i++;
      }
      return out;
    }
    return text;
  }
}

export default new Mask();
