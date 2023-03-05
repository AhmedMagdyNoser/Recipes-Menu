import Card from "./Card";

export default function MenuList({ shownItems }) {
  return (
    <div className="container" style={{minHeight: '100vh'}}>
      {
        shownItems.length === 0 ?
        <h2 className="text-center">لا توجد نتائج</h2>
        :
        shownItems.map(item =>
          <Card
            key={item.id}
            title={item.title}
            category={item.category}
            imgUrl={item.imgUrl}
            description={item.description}
            price={item.price}
          />
        )
      }
    </div>
  )
}
