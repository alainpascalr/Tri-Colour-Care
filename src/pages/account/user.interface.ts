/**
 * Created by hamidhabib on 2017-02-05.
 */
export class User {
  constructor(public id: string,
              public firstName: string,
              public lastName: string,
              public email: string,
              public phone: string,
              public age: string,
              public weight: string,
              public height: string,
              public gender: string,
              public healthcard: string,
              public status: string,
              public lastseen: string,
              public reason: string,
              public photo: string,
              public passsword?: string) {}
}
