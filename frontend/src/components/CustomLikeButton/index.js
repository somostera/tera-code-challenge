import { ProductLikeBtn } from '../Product/styles'
import { IoMdHeart, IoMdHeartEmpty} from 'react-icons/io'

export default function CustomLikeButton({ active, ...rest }) {
  return (
    <ProductLikeBtn active={active} {...rest}>
      { active ? <IoMdHeart /> : <IoMdHeartEmpty /> }
    </ProductLikeBtn>
  )
}