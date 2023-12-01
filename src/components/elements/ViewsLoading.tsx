import { IconEye } from "../Icons"

export const ViewsLoading = () => {
   return (
      <div className="animate-pulse flex items-center gap-1">
         <IconEye className="inline-block text-base" />
         --- views
      </div>
   )
}