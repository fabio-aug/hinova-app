class Log {
  public error(message?: string) {
    console.error(message || 'Erro');
  }

  public succes(message?: string) {
    console.info(message || 'Sucesso');
  }
}

export default new Log();
