import {
  useState,
  useEffect
} from 'react'

import {
  Link
} from 'react-router-dom'

import {
  Heading,
  Span
} from '../../Typography'
import Icon from '../../Icon'
import Button from '../../Button'

function Article({
  key,
  title,
  slug,
  description,
  thumbnail,
  date,
  currentUser,
  addLike,
  deleteLike
}) {
  const [postLike, setPostLike] = useState([])
  const [totalLikes, setTotalLikes] = useState(0)

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(
  //       collection(firestore, 'design_likes'),
  //       where('designId', '==', article.id),
  //       where('user.id', '==', currentUser && currentUser.uid)
  //     ), (snapshot) => {
  //       let documents = []

  //       snapshot.docs.forEach((doc) => {
  //         documents.push({ ...doc.data(), id: doc.id })
  //       })

  //       setPostLike(documents)
  //     }
  //   )

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [currentUser && currentUser.uid, article.id])

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(
  //       collection(firestore, 'design_likes'),
  //       where('designId', '==', article.id)
  //     ), (snapshot) => {
  //       setTotalLikes(snapshot.size)
  //     }
  //   )

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [article.id])

  return (
    <div>
      <div className='article-thumbnail'>
        <figure className='article-thumbnail__placeholder'>
          <img
            src={`https://strapi-development-tb5n.onrender.com${thumbnail}`}
            alt={title}
            className='article-thumbnail__placeholder-img'
            loading='lazy'
          />
        </figure>

        <Link
          to={`/articles/${slug}`}
          className='article-thumbnail__link'
        >
          <Span>{title}</Span>
        </Link>

        <div className='article-thumbnail__overlay'>
          <div className='article-thumbnail__content'>
            <Heading
              as='h6'
              classes={['article-thumbnail__title']}
              utilities={{
                w: { _: 75 },
                mb: { _: 0 },
              }}
            >
              <Link
                to={`/articles/${slug}`}
                className='article-thumbnail__link'
              >
                {title}
              </Link>
            </Heading>
          </div>
        </div>
      </div>

      {/* <div className='w-100 mt-4 article-thumbnail__details d-flex align-items-center'>
        <span>
          {article && article.author.name}
        </span>

        <ul
          className='nav gap-3 article-thumbnail__actions'
        >
          {
            (
              (postLike && postLike.length === 1)
                ?
                postLike.map((like) => {
                  return like.status === true &&
                    <Button
                      onClick={() => {
                        deleteLike(like.id)
                      }}
                      type='submit'
                      size='sm'
                      variant='tonal'
                      color='primary'
                      extended
                      classes={['article-thumbnail__action']}
                      utilities={{
                        mb: { _: 0 },
                        rounded: { _: 'lg' }
                      }}
                    >
                      <Icon
                        type='fas'
                        iconName='heart'
                        classes={['fe', 'fe--sm', 'btn__icon']}
                      />

                      <span className='ml-2'>{totalLikes}</span>
                    </Button>
                })
                :
                <Button
                  onClick={() => {
                    addLike(article.id)
                  }}
                  type='submit'
                  size='sm'
                  variant='tonal'
                  color='light'
                  extended
                  classes={['article-thumbnail__action']}
                  utilities={{
                    mb: { _: 0 },
                    rounded: { _: 'lg' }
                  }}
                >
                  <Icon
                    type='fas'
                    iconName='heart'
                    classes={['fe', 'fe--sm', 'btn__icon']}
                  />

                  <span className='ml-2'>{totalLikes}</span>
                </Button>
            )
          }
        </ul>
      </div> */}
    </div>
  )
}

export default Article
