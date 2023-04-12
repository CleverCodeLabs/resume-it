import { Container } from "@chakra-ui/react";
import React, { useState } from "react";

interface A4PaperProps {
  children: React.ReactNode;
}

const A4Paper: React.FC<A4PaperProps> = ({ children }) => {
  return (
    <Container bg="red.400" h="297mm" maxW="210mm">
      {children}
    </Container>
  );
};

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <A4Paper>{children}</A4Paper>;
};
interface DocumentProps {
  content: string;
}
const Document: React.FC<DocumentProps> = ({ content }) => {
  const [pages, setPages] = useState<string[]>([]);
  const pageSize = 3000;

  React.useEffect(() => {
    const totalPages = Math.ceil(content.length / pageSize);
    const newPages = Array.from({ length: totalPages }, (_, i) =>
      content.slice(i * pageSize, (i + 1) * pageSize)
    );
    setPages(newPages);
  }, [content]);

  const removePage = (index: number) => {
    const newPages = [...pages];
    newPages.splice(index, 1);
    setPages(newPages);
  };

  return (
    <>
      {pages.map((pageContent, index) => (
        <div key={index}>
          {index > 0 && (
            <button onClick={() => removePage(index)}>Remove Page</button>
          )}
          <Page>{pageContent}</Page>
        </div>
      ))}
    </>
  );
};
const Preview = () => {
  return (
    <Document
      content="Duis purus dui, rutrum vitae ipsum in, commodo porttitor augue. Morbi hendrerit pulvinar nulla, at condimentum nisi volutpat in. Mauris dignissim magna et massa congue bibendum. Nulla sit amet egestas purus, ut volutpat ipsum. Integer vel consequat libero. Praesent lacus arcu, pretium nec libero eu, condimentum malesuada lacus. Vestibulum iaculis, quam et elementum sollicitudin, enim ipsum porttitor neque, nec mattis erat augue in augue. Quisque sit amet rutrum mauris, ut dapibus nisl. Nullam in massa aliquet, varius urna eu, porttitor risus. Pellentesque convallis eleifend justo ac cursus. Cras eleifend posuere nisi nec malesuada. Duis congue tellus ut tellus malesuada facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in massa velit. Aenean eget tincidunt quam, sed ullamcorper nisi. Morbi congue blandit ligula, ac auctor nisl lacinia sed. Donec a placerat enim. Suspendisse sed vestibulum leo, vitae feugiat ante. Aenean sodales justo in tellus tincidunt, id consectetur turpis congue. Suspendisse eleifend eleifend velit sed dapibus. Vivamus dictum, risus et auctor pretium, ante nibh euismod turpis, vel egestas nunc justo vitae massa. Etiam vel tortor venenatis, fermentum ante ut, eleifend diam. Vestibulum luctus cursus sapien at consequat. Sed sit amet neque sit amet ipsum iaculis blandit et eget odio. Morbi venenatis massa tellus, lacinia porttitor velit dictum non. Curabitur sit amet commodo diam. Curabitur urna dolor, imperdiet semper tincidunt eu, porttitor eget elit. Morbi ac erat a nulla hendrerit tempor eu quis mauris.

Sed ligula odio, vehicula sed augue ac, aliquet condimentum turpis. Sed fringilla scelerisque tellus, vel facilisis lectus. Pellentesque rutrum eros eu sem tincidunt vestibulum. Duis auctor, mi ac blandit tempor, ex turpis gravida velit, sed consequat diam dui et lacus. Fusce varius, nisi non pharetra bibendum, diam est facilisis ligula, eget lacinia tellus lacus vel ex. Ut nec mauris interdum, sodales urna non, finibus urna. Donec luctus, mauris sit amet posuere pretium, massa ligula sodales enim, vel malesuada ligula lectus vitae orci. Nullam fringilla consequat finibus. Nulla sed metus lacus. Quisque a lobortis ante, ut pellentesque neque.

Aenean nibh nibh, sollicitudin ac consequat vel, bibendum in lorem. Phasellus nibh est, ullamcorper non iaculis non, varius et urna. Nulla magna ante, tempor sed risus suscipit, sodales posuere orci. Ut sed tellus rhoncus, volutpat nulla quis, congue ante. Aenean rhoncus nulla sit amet odio varius, vel sollicitudin metus suscipit. Sed facilisis nisl mi, nec bibendum augue maximus ut. Ut ullamcorper enim eget est porta placerat.

Suspendisse ut metus eros. Suspendisse ac convallis libero. Nam feugiat semper auctor. Quisque sapien tortor, elementum ac libero quis, finibus blandit sapien. Sed eget magna id dolor bibendum consectetur. Vivamus mollis nisl augue, posuere aliquet dolor ultrices vel. Mauris laoreet eros sit amet tincidunt ullamcorper. Suspendisse ante arcu, luctus in purus vitae, vehicula tincidunt dolor. Vivamus porttitor auctor dui, id placerat nunc porta vitae. Sed tincidunt commodo vestibulum. Nullam sodales volutpat purus at pellentesque. Morbi quis nisl commodo, mollis nisi volutpat, aliquam tellus.

Duis purus dui, rutrum vitae ipsum in, commodo porttitor augue. Morbi hendrerit pulvinar nulla, at condimentum nisi volutpat in. Mauris dignissim magna et massa congue bibendum. Nulla sit amet egestas purus, ut volutpat ipsum. Integer vel consequat libero. Praesent lacus arcu, pretium nec libero eu, condimentum malesuada lacus. Vestibulum iaculis, quam et elementum sollicitudin, enim ipsum porttitor neque, nec mattis erat augue in augue. Quisque sit amet rutrum mauris, ut dapibus nisl. Nullam in massa aliquet, varius urna eu, porttitor risus. Pellentesque convallis eleifend justo ac cursus. Cras eleifend posuere nisi nec malesuada. Duis congue tellus ut tellus malesuada facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in massa velit. Aenean eget tincidunt quam, sed ullamcorper nisi. Morbi congue blandit ligula, ac auctor nisl lacinia sed. Donec a placerat enim. Suspendisse sed vestibulum leo, vitae feugiat ante. Aenean sodales justo in tellus tincidunt, id consectetur turpis congue. Suspendisse eleifend eleifend velit sed dapibus. Vivamus dictum, risus et auctor pretium, ante nibh euismod turpis, vel egestas nunc justo vitae massa. Etiam vel tortor venenatis, fermentum ante ut, eleifend diam. Vestibulum luctus cursus sapien at consequat. Sed sit amet neque sit amet ipsum iaculis blandit et eget odio. Morbi venenatis massa tellus, lacinia porttitor velit dictum non. Curabitur sit amet commodo diam. Curabitur urna dolor, imperdiet semper tincidunt eu, porttitor eget elit. Morbi ac erat a nulla hendrerit tempor eu quis mauris.

Sed ligula odio, vehicula sed augue ac, aliquet condimentum turpis. Sed fringilla scelerisque tellus, vel facilisis lectus. Pellentesque rutrum eros eu sem tincidunt vestibulum. Duis auctor, mi ac blandit tempor, ex turpis gravida velit, sed consequat diam dui et lacus. Fusce varius, nisi non pharetra bibendum, diam est facilisis ligula, eget lacinia tellus lacus vel ex. Ut nec mauris interdum, sodales urna non, finibus urna. Donec luctus, mauris sit amet posuere pretium, massa ligula sodales enim, vel malesuada ligula lectus vitae orci. Nullam fringilla consequat finibus. Nulla sed metus lacus. Quisque a lobortis ante, ut pellentesque neque.

Aenean nibh nibh, sollicitudin ac consequat vel, bibendum in lorem. Phasellus nibh est, ullamcorper non iaculis non, varius et urna. Nulla magna ante, tempor sed risus suscipit, sodales posuere orci. Ut sed tellus rhoncus, volutpat nulla quis, congue ante. Aenean rhoncus nulla sit amet odio varius, vel sollicitudin metus suscipit. Sed facilisis nisl mi, nec bibendum augue maximus ut. Ut ullamcorper enim eget est porta placerat.

Suspendisse ut metus eros. Suspendisse ac convallis libero. Nam feugiat semper auctor. Quisque sapien tortor, elementum ac libero quis, finibus blandit sapien. Sed eget magna id dolor bibendum consectetur. Vivamus mollis nisl augue, posuere aliquet dolor ultrices vel. Mauris laoreet eros sit amet tincidunt ullamcorper. Suspendisse ante arcu, luctus in purus vitae, vehicula tincidunt dolor. Vivamus porttitor auctor dui, id placerat nunc porta vitae. Sed tincidunt commodo vestibulum. Nullam sodales volutpat purus at pellentesque. Morbi quis nisl commodo, mollis nisi volutpat, aliquam tellus.

Duis purus dui, rutrum vitae ipsum in, commodo porttitor augue. Morbi hendrerit pulvinar nulla, at condimentum nisi volutpat in. Mauris dignissim magna et massa congue bibendum. Nulla sit amet egestas purus, ut volutpat ipsum. Integer vel consequat libero. Praesent lacus arcu, pretium nec libero eu, condimentum malesuada lacus. Vestibulum iaculis, quam et elementum sollicitudin, enim ipsum porttitor neque, nec mattis erat augue in augue. Quisque sit amet rutrum mauris, ut dapibus nisl. Nullam in massa aliquet, varius urna eu, porttitor risus. Pellentesque convallis eleifend justo ac cursus. Cras eleifend posuere nisi nec malesuada. Duis congue tellus ut tellus malesuada facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in massa velit. Aenean eget tincidunt quam, sed ullamcorper nisi. Morbi congue blandit ligula, ac auctor nisl lacinia sed. Donec a placerat enim. Suspendisse sed vestibulum leo, vitae feugiat ante. Aenean sodales justo in tellus tincidunt, id consectetur turpis congue. Suspendisse eleifend eleifend velit sed dapibus. Vivamus dictum, risus et auctor pretium, ante nibh euismod turpis, vel egestas nunc justo vitae massa. Etiam vel tortor venenatis, fermentum ante ut, eleifend diam. Vestibulum luctus cursus sapien at consequat. Sed sit amet neque sit amet ipsum iaculis blandit et eget odio. Morbi venenatis massa tellus, lacinia porttitor velit dictum non. Curabitur sit amet commodo diam. Curabitur urna dolor, imperdiet semper tincidunt eu, porttitor eget elit. Morbi ac erat a nulla hendrerit tempor eu quis mauris.

Sed ligula odio, vehicula sed augue ac, aliquet condimentum turpis. Sed fringilla scelerisque tellus, vel facilisis lectus. Pellentesque rutrum eros eu sem tincidunt vestibulum. Duis auctor, mi ac blandit tempor, ex turpis gravida velit, sed consequat diam dui et lacus. Fusce varius, nisi non pharetra bibendum, diam est facilisis ligula, eget lacinia tellus lacus vel ex. Ut nec mauris interdum, sodales urna non, finibus urna. Donec luctus, mauris sit amet posuere pretium, massa ligula sodales enim, vel malesuada ligula lectus vitae orci. Nullam fringilla consequat finibus. Nulla sed metus lacus. Quisque a lobortis ante, ut pellentesque neque.

Aenean nibh nibh, sollicitudin ac consequat vel, bibendum in lorem. Phasellus nibh est, ullamcorper non iaculis non, varius et urna. Nulla magna ante, tempor sed risus suscipit, sodales posuere orci. Ut sed tellus rhoncus, volutpat nulla quis, congue ante. Aenean rhoncus nulla sit amet odio varius, vel sollicitudin metus suscipit. Sed facilisis nisl mi, nec bibendum augue maximus ut. Ut ullamcorper enim eget est porta placerat.

Suspendisse ut metus eros. Suspendisse ac convallis libero. Nam feugiat semper auctor. Quisque sapien tortor, elementum ac libero quis, finibus blandit sapien. Sed eget magna id dolor bibendum consectetur. Vivamus mollis nisl augue, posuere aliquet dolor ultrices vel. Mauris laoreet eros sit amet tincidunt ullamcorper. Suspendisse ante arcu, luctus in purus vitae, vehicula tincidunt dolor. Vivamus porttitor auctor dui, id placerat nunc porta vitae. Sed tincidunt commodo vestibulum. Nullam sodales volutpat purus at pellentesque. Morbi quis nisl commodo, mollis nisi volutpat, aliquam tellus.

Duis purus dui, rutrum vitae ipsum in, commodo porttitor augue. Morbi hendrerit pulvinar nulla, at condimentum nisi volutpat in. Mauris dignissim magna et massa congue bibendum. Nulla sit amet egestas purus, ut volutpat ipsum. Integer vel consequat libero. Praesent lacus arcu, pretium nec libero eu, condimentum malesuada lacus. Vestibulum iaculis, quam et elementum sollicitudin, enim ipsum porttitor neque, nec mattis erat augue in augue. Quisque sit amet rutrum mauris, ut dapibus nisl. Nullam in massa aliquet, varius urna eu, porttitor risus. Pellentesque convallis eleifend justo ac cursus. Cras eleifend posuere nisi nec malesuada. Duis congue tellus ut tellus malesuada facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in massa velit. Aenean eget tincidunt quam, sed ullamcorper nisi. Morbi congue blandit ligula, ac auctor nisl lacinia sed. Donec a placerat enim. Suspendisse sed vestibulum leo, vitae feugiat ante. Aenean sodales justo in tellus tincidunt, id consectetur turpis congue. Suspendisse eleifend eleifend velit sed dapibus. Vivamus dictum, risus et auctor pretium, ante nibh euismod turpis, vel egestas nunc justo vitae massa. Etiam vel tortor venenatis, fermentum ante ut, eleifend diam. Vestibulum luctus cursus sapien at consequat. Sed sit amet neque sit amet ipsum iaculis blandit et eget odio. Morbi venenatis massa tellus, lacinia porttitor velit dictum non. Curabitur sit amet commodo diam. Curabitur urna dolor, imperdiet semper tincidunt eu, porttitor eget elit. Morbi ac erat a nulla hendrerit tempor eu quis mauris.

Sed ligula odio, vehicula sed augue ac, aliquet condimentum turpis. Sed fringilla scelerisque tellus, vel facilisis lectus. Pellentesque rutrum eros eu sem tincidunt vestibulum. Duis auctor, mi ac blandit tempor, ex turpis gravida velit, sed consequat diam dui et lacus. Fusce varius, nisi non pharetra bibendum, diam est facilisis ligula, eget lacinia tellus lacus vel ex. Ut nec mauris interdum, sodales urna non, finibus urna. Donec luctus, mauris sit amet posuere pretium, massa ligula sodales enim, vel malesuada ligula lectus vitae orci. Nullam fringilla consequat finibus. Nulla sed metus lacus. Quisque a lobortis ante, ut pellentesque neque.

Aenean nibh nibh, sollicitudin ac consequat vel, bibendum in lorem. Phasellus nibh est, ullamcorper non iaculis non, varius et urna. Nulla magna ante, tempor sed risus suscipit, sodales posuere orci. Ut sed tellus rhoncus, volutpat nulla quis, congue ante. Aenean rhoncus nulla sit amet odio varius, vel sollicitudin metus suscipit. Sed facilisis nisl mi, nec bibendum augue maximus ut. Ut ullamcorper enim eget est porta placerat.

Suspendisse ut metus eros. Suspendisse ac convallis libero. Nam feugiat semper auctor. Quisque sapien tortor, elementum ac libero quis, finibus blandit sapien. Sed eget magna id dolor bibendum consectetur. Vivamus mollis nisl augue, posuere aliquet dolor ultrices vel. Mauris laoreet eros sit amet tincidunt ullamcorper. Suspendisse ante arcu, luctus in purus vitae, vehicula tincidunt dolor. Vivamus porttitor auctor dui, id placerat nunc porta vitae. Sed tincidunt commodo vestibulum. Nullam sodales volutpat purus at pellentesque. Morbi quis nisl commodo, mollis nisi volutpat, aliquam tellus.

Duis purus dui, rutrum vitae ipsum in, commodo porttitor augue. Morbi hendrerit pulvinar nulla, at condimentum nisi volutpat in. Mauris dignissim magna et massa congue bibendum. Nulla sit amet egestas purus, ut volutpat ipsum. Integer vel consequat libero. Praesent lacus arcu, pretium nec libero eu, condimentum malesuada lacus. Vestibulum iaculis, quam et elementum sollicitudin, enim ipsum porttitor neque, nec mattis erat augue in augue. Quisque sit amet rutrum mauris, ut dapibus nisl. Nullam in massa aliquet, varius urna eu, porttitor risus. Pellentesque convallis eleifend justo ac cursus. Cras eleifend posuere nisi nec malesuada. Duis congue tellus ut tellus malesuada facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in massa velit. Aenean eget tincidunt quam, sed ullamcorper nisi. Morbi congue blandit ligula, ac auctor nisl lacinia sed. Donec a placerat enim. Suspendisse sed vestibulum leo, vitae feugiat ante. Aenean sodales justo in tellus tincidunt, id consectetur turpis congue. Suspendisse eleifend eleifend velit sed dapibus. Vivamus dictum, risus et auctor pretium, ante nibh euismod turpis, vel egestas nunc justo vitae massa. Etiam vel tortor venenatis, fermentum ante ut, eleifend diam. Vestibulum luctus cursus sapien at consequat. Sed sit amet neque sit amet ipsum iaculis blandit et eget odio. Morbi venenatis massa tellus, lacinia porttitor velit dictum non. Curabitur sit amet commodo diam. Curabitur urna dolor, imperdiet semper tincidunt eu, porttitor eget elit. Morbi ac erat a nulla hendrerit tempor eu quis mauris.

Sed ligula odio, vehicula sed augue ac, aliquet condimentum turpis. Sed fringilla scelerisque tellus, vel facilisis lectus. Pellentesque rutrum eros eu sem tincidunt vestibulum. Duis auctor, mi ac blandit tempor, ex turpis gravida velit, sed consequat diam dui et lacus. Fusce varius, nisi non pharetra bibendum, diam est facilisis ligula, eget lacinia tellus lacus vel ex. Ut nec mauris interdum, sodales urna non, finibus urna. Donec luctus, mauris sit amet posuere pretium, massa ligula sodales enim, vel malesuada ligula lectus vitae orci. Nullam fringilla consequat finibus. Nulla sed metus lacus. Quisque a lobortis ante, ut pellentesque neque.

Aenean nibh nibh, sollicitudin ac consequat vel, bibendum in lorem. Phasellus nibh est, ullamcorper non iaculis non, varius et urna. Nulla magna ante, tempor sed risus suscipit, sodales posuere orci. Ut sed tellus rhoncus, volutpat nulla quis, congue ante. Aenean rhoncus nulla sit amet odio varius, vel sollicitudin metus suscipit. Sed facilisis nisl mi, nec bibendum augue maximus ut. Ut ullamcorper enim eget est porta placerat.

Suspendisse ut metus eros. Suspendisse ac convallis libero. Nam feugiat semper auctor. Quisque sapien tortor, elementum ac libero quis, finibus blandit sapien. Sed eget magna id dolor bibendum consectetur. Vivamus mollis nisl augue, posuere aliquet dolor ultrices vel. Mauris laoreet eros sit amet tincidunt ullamcorper. Suspendisse ante arcu, luctus in purus vitae, vehicula tincidunt dolor. Vivamus porttitor auctor dui, id placerat nunc porta vitae. Sed tincidunt commodo vestibulum. Nullam sodales volutpat purus at pellentesque. Morbi quis nisl commodo, mollis nisi volutpat, aliquam tellus.

Duis purus dui, rutrum vitae ipsum in, commodo porttitor augue. Morbi hendrerit pulvinar nulla, at condimentum nisi volutpat in. Mauris dignissim magna et massa congue bibendum. Nulla sit amet egestas purus, ut volutpat ipsum. Integer vel consequat libero. Praesent lacus arcu, pretium nec libero eu, condimentum malesuada lacus. Vestibulum iaculis, quam et elementum sollicitudin, enim ipsum porttitor neque, nec mattis erat augue in augue. Quisque sit amet rutrum mauris, ut dapibus nisl. Nullam in massa aliquet, varius urna eu, porttitor risus. Pellentesque convallis eleifend justo ac cursus. Cras eleifend posuere nisi nec malesuada. Duis congue tellus ut tellus malesuada facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in massa velit. Aenean eget tincidunt quam, sed ullamcorper nisi. Morbi congue blandit ligula, ac auctor nisl lacinia sed. Donec a placerat enim. Suspendisse sed vestibulum leo, vitae feugiat ante. Aenean sodales justo in tellus tincidunt, id consectetur turpis congue. Suspendisse eleifend eleifend velit sed dapibus. Vivamus dictum, risus et auctor pretium, ante nibh euismod turpis, vel egestas nunc justo vitae massa. Etiam vel tortor venenatis, fermentum ante ut, eleifend diam. Vestibulum luctus cursus sapien at consequat. Sed sit amet neque sit amet ipsum iaculis blandit et eget odio. Morbi venenatis massa tellus, lacinia porttitor velit dictum non. Curabitur sit amet commodo diam. Curabitur urna dolor, imperdiet semper tincidunt eu, porttitor eget elit. Morbi ac erat a nulla hendrerit tempor eu quis mauris.

Sed ligula odio, vehicula sed augue ac, aliquet condimentum turpis. Sed fringilla scelerisque tellus, vel facilisis lectus. Pellentesque rutrum eros eu sem tincidunt vestibulum. Duis auctor, mi ac blandit tempor, ex turpis gravida velit, sed consequat diam dui et lacus. Fusce varius, nisi non pharetra bibendum, diam est facilisis ligula, eget lacinia tellus lacus vel ex. Ut nec mauris interdum, sodales urna non, finibus urna. Donec luctus, mauris sit amet posuere pretium, massa ligula sodales enim, vel malesuada ligula lectus vitae orci. Nullam fringilla consequat finibus. Nulla sed metus lacus. Quisque a lobortis ante, ut pellentesque neque.

Aenean nibh nibh, sollicitudin ac consequat vel, bibendum in lorem. Phasellus nibh est, ullamcorper non iaculis non, varius et urna. Nulla magna ante, tempor sed risus suscipit, sodales posuere orci. Ut sed tellus rhoncus, volutpat nulla quis, congue ante. Aenean rhoncus nulla sit amet odio varius, vel sollicitudin metus suscipit. Sed facilisis nisl mi, nec bibendum augue maximus ut. Ut ullamcorper enim eget est porta placerat.

Suspendisse ut metus eros. Suspendisse ac convallis libero. Nam feugiat semper auctor. Quisque sapien tortor, elementum ac libero quis, finibus blandit sapien. Sed eget magna id dolor bibendum consectetur. Vivamus mollis nisl augue, posuere aliquet dolor ultrices vel. Mauris laoreet eros sit amet tincidunt ullamcorper. Suspendisse ante arcu, luctus in purus vitae, vehicula tincidunt dolor. Vivamus porttitor auctor dui, id placerat nunc porta vitae. Sed tincidunt commodo vestibulum. Nullam sodales volutpat purus at pellentesque. Morbi quis nisl commodo, mollis nisi volutpat, aliquam tellus.

Duis purus dui, rutrum vitae ipsum in, commodo porttitor augue. Morbi hendrerit pulvinar nulla, at condimentum nisi volutpat in. Mauris dignissim magna et massa congue bibendum. Nulla sit amet egestas purus, ut volutpat ipsum. Integer vel consequat libero. Praesent lacus arcu, pretium nec libero eu, condimentum malesuada lacus. Vestibulum iaculis, quam et elementum sollicitudin, enim ipsum porttitor neque, nec mattis erat augue in augue. Quisque sit amet rutrum mauris, ut dapibus nisl. Nullam in massa aliquet, varius urna eu, porttitor risus. Pellentesque convallis eleifend justo ac cursus. Cras eleifend posuere nisi nec malesuada. Duis congue tellus ut tellus malesuada facilisis."
    />
  );
};

export default Preview;
