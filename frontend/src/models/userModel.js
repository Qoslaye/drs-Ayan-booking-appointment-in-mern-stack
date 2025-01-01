export class User {
    constructor(data) {
      this.id = data.id;
      this.email = data.email;
      this.name = data.name;
      this.createdAt = data.createdAt;
    }
  
    static fromJSON(json) {
      return new User(json);
    }
  
    toJSON() {
      return {
        id: this.id,
        email: this.email,
        name: this.name,
        createdAt: this.createdAt,
      };
    }
  }