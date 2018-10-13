export class Artical {
    title:string;
    link:string
    vote:number
   constructor(title,link,vote?) {
       this.title = title
       this.link =link
       this.vote = vote||0
   }

   upVote(){
       this.vote +=1
   }
   downVote()
   {
       this.vote -=1
   }
}
