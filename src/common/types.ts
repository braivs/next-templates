export type CardType = {
    id: number | string
    title: string
    imgRef: string
    years?: YearsType
}

export type VariantType = 'video' | 'girl' | 'competition'

export type YearsType = '2010_2011' | '2012_2013' | '2015_2017' | '2013_2014' | '2012' | '2011' | 'Archive'

export type CardComponentType = CardType & {
    variant: VariantType
}