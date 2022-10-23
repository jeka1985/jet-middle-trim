import React, {memo, useMemo} from 'react';
import cn from 'classnames';
import {copyText, splitString} from './Span.utils';
import st from './Span.module.css';

type Props = {
  children: string;
  tailLength: number;
  title?: string;
  className?: string;
}

export const Span = memo<Props>(function Span(props) {
  const result = useMemo(() => {
    return splitString(props.children, props.tailLength);
  }, [props.children, props.tailLength])
  
  return (
    <div
      title={props.title}
      onCopy={copyText}
      className={cn(st.wrapper, props.className)}
      >
      <span className={st.cut}>{result[0]}</span>{result[1]}
    </div>
  );
})