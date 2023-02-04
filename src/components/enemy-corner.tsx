import { FC } from 'react'
import Card from './game-elements/Card'

type EnemyCornerProps = {
  className?: string
}

const EnemyCorner: FC<EnemyCornerProps> = ({ className }) => {
  return <div className='h-1/3 bg-black text-white relative'>
    <div className='relative h-full '>
      <div className='absolute flex h-full w-full items-center align-middle justify-center'>
        <img className='absolute bottom-0 max-h-[95%] ' src="/placeholders/lumberjack.png" alt="enemy" />
      </div>

      <div className='absolute flex h-full w-full justify-center    '>
        <div className='border-dotted border-2 border-white w-3/5 h-[98%] bottom-0 absolute '>
          {/* cards here */}
          <div className='absolute flex h-[60%] w-full bottom-0 space-x-5'>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>


        </div>
      </div>
    </div>

  </div>
}

export default EnemyCorner
