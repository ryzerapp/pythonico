import Demo from "./Demo";

const SectionDemo = ({data}) => {

  return (
    <div className="row">
      {data && data.map((item , key) => (
          <Demo
            key={key}
            path={item.path}
            img={item.imgDemo}
          />
        ))}
    </div>
  );
}

export default SectionDemo;
