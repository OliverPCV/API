export class CommentsModel {
  // tslint:disable-next-line:variable-name max-line-length
  constructor(public id: number, public body: string, public user_id: number, public author_id: {id: number, email: string, username: string}, public page: number, public page_count: number) {

  }

}
