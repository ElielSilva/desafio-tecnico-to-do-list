// class HttpException extends Error {
//   constructor(public status: number, public message:string){
//       super(message)
//   }
// }

// export default HttpException;

class HttpException extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

module.exports = HttpException;
