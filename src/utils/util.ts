export const isEmpty = (obj: any): boolean => {
  return Object.keys(obj).length === 0
}

export const getRandomNumber = (low = 0, high = 100) => {
  return Math.floor(Math.random() * (high - low) + low)
}

export const getCommonItems = (arr1: any[], arr2: any[]) => {
  const commonItems: any[] = []

  arr1.forEach((item1: any) => {
    arr2.forEach((item2: any) => {
      if (item1 === item2) {
        commonItems.push(item1)
      }
    })
  })

  return commonItems
}

export const getUncommonItems = (list: any[], commonItems: Array<any>) => {
  return list.filter((v) => {
    return !commonItems.includes(v)
  })
}
