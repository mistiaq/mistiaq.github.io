import Divider from '../Divider'

function SkeletonLoading() {
  return (
    <>
      <div className='card'>
        <div className='skeleton mb-6'></div>

        <div className='mb-6'>
          <div className='skeleton mb-3'></div>
          <div className='skeleton w-75 mb-3'></div>
        </div>

        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center gap-2'>
            <div className='skeleton w-150px'></div>
            <div className='skeleton w-150px'></div>
          </div>

          <div className='d-flex align-items-center gap-2'>
            <div className='skeleton w-25px'></div>
            <div className='skeleton w-25px'></div>
          </div>
        </div>
      </div>

      <Divider utilities={{ my: { _: 9 } }} />

      <div className='card'>
        <div className='skeleton mb-6'></div>

        <div className='mb-6'>
          <div className='skeleton mb-3'></div>
          <div className='skeleton w-75 mb-3'></div>
        </div>

        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center gap-2'>
            <div className='skeleton w-150px'></div>
            <div className='skeleton w-150px'></div>
          </div>

          <div className='d-flex align-items-center gap-2'>
            <div className='skeleton w-25px'></div>
            <div className='skeleton w-25px'></div>
          </div>
        </div>
      </div>


      <Divider utilities={{ my: { _: 9 } }} />

      <div className='card'>
        <div className='skeleton mb-6'></div>

        <div className='mb-6'>
          <div className='skeleton mb-3'></div>
          <div className='skeleton w-75 mb-3'></div>
        </div>

        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center gap-2'>
            <div className='skeleton w-150px'></div>
            <div className='skeleton w-150px'></div>
          </div>

          <div className='d-flex align-items-center gap-2'>
            <div className='skeleton w-25px'></div>
            <div className='skeleton w-25px'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkeletonLoading
