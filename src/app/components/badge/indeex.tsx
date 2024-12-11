import { Badge } from "@chakra-ui/react";

const BadgePartneo = ({ children }: any) => {
  return (
    <Badge
      bg="#191919"
      color="white"
      borderRadius="50px"
      border="1px solid #474747"
      fontSize='12px'
      padding={{base: "4px 10px", xl: "10px 24px"}}
    >
      {children}
    </Badge>
  );
};

export default BadgePartneo;
