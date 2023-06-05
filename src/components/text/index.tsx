import type { FC, CSSProperties } from 'react'
import getClassName from '@/utils/get-class-name'
import React from 'react'

const className = getClassName('text')
export interface TextProps {
  /** 内容 */
  content: string
  /** 样式 */
  style?: CSSProperties
}
/** Text文本组件 */
export const Text: FC<TextProps> = (props: TextProps) => {
  const { content, style = {} } = props
  return (
    <div>
      <div className={className('container')} style={style}>
        {content}
      </div>
    </div>
  )
}

Text.defaultProps = {
  content: '一段文字',
}

export default Text
