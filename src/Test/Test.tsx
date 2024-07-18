import {ButtonGallery} from "@/common/ButtonGallery/ButtonGallery"
import {useGallery} from "@/common/hooks"

export const Test = () => {
  const DIR_NC47 = require.context('/src/img/video/nc47', false)
  // console.log(DIR_NC47)
  const gallery1 = useGallery(DIR_NC47)
  console.log('gallery1')
  console.log(gallery1)

  return (
    <>
      <div>Hi, I am test component</div>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={'Screenshots'}
      />
    </>
  )
}