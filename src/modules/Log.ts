import { ToastAndroid } from 'react-native';

class Log {
  public error(message?: string) {
    console.error(message || 'Erro');
  }

  public succes(message: string) {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
    console.info(message || 'Sucesso');
  }
}

export default new Log();
