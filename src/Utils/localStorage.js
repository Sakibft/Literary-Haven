 
import toast from "react-hot-toast"
//  read
export const getReadItem = () => {
  let Cards = []
  const storedCards = localStorage.getItem('Read')
  if(storedCards){
    Cards = JSON.parse(storedCards)
  }
  return Cards 
}
// save
export const saveReadCards = card => {
  let cards = getReadItem()
  const isExist = cards.find(c => c.bookId === card.bookId)
  if(isExist){
    return toast.error('Already Added')
  }
  cards.push(card)
  localStorage.setItem('Read', JSON.stringify(cards))
  toast.success('Successfully added read book')
}
// wishList
 export const getWishList = () =>{
  let Cards = []
  const storedCards = localStorage.getItem('wishList')
  if(storedCards){
    Cards = JSON.parse(storedCards)
  }
  return Cards
 }
//  save WishList
 export const saveWishList = card => {
  let cards = getWishList()
  const isExist = cards.find(c => c.bookId === card.bookId)
  const read = getReadItem()
  const isExistRed = read.find(c => c.bookId === card.bookId)
  if(isExist||isExistRed){
    return toast.error('Already Added')
  }
 
  cards.push(card)
  localStorage.setItem('wishList', JSON.stringify(cards))
  toast.success('Successfully added wishlist')
 }