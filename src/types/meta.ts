export interface ContentMeta {
   slug: string
   _count: {
      View: number
      Like: number
   }
   likesByUser: number
}

export interface SingleContentMeta {
   contentViews: number
   contentLikes: number
   likesByUser: number
}