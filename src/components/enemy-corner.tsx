import { FC } from 'react'

type EnemyCornerProps = {
  className?: string
}

const EnemyCorner: FC<EnemyCornerProps> = ({ className }) => {
  return <div className={className}>EnemyCorner</div>
}

export default EnemyCorner
