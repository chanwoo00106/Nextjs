// 남은 시간 계산
export function leftTime(completeDate) {
  const current = new Date();
  const complete = new Date(completeDate);
  // current가 더 미래냐
  if (current >= complete) {
    const [hour, min, sec] = getHMS(complete, current);

    if (hour === 0) {
      if (min === 0) {
        return `${sec}초 지남`;
      }
      return `${min}분 지남`;
    } else if (hour >= 24) return `${Math.floor(hour / 24)}일 지남`;
    return `${hour}시간 지남`;
  } else {
    // complete가 더 미래냐
    const [hour, min, sec] = getHMS(current, complete);

    if (hour === 0) {
      if (min === 0) {
        return `${sec}초 남음`;
      }
      return `${min}분 남음`;
    } else if (hour >= 24) return `${Math.floor(hour / 24)}일 남음`;
    return `${hour}시간 남음`;
  }
}

function getHMS(current, future) {
  const gap = future - current;
  const hour = Math.floor(gap / (1000 * 60 * 60));
  const min = Math.floor(gap / (1000 * 60));
  const sec = Math.floor(gap / 1000);
  return [hour, min, sec];
}
