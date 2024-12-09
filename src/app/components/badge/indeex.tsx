import { Badge } from "@chakra-ui/react";

const BadgePartneo = ({ children }: any) => {
  return (
    <Badge
      bg="#191919"
      color="white"
      borderRadius="50px"
      border="1px solid #474747"
      fontSize={{base: "12px",md: "16px"}}
      padding="10px 24px"
    >
      {children}
    </Badge>
  );
};

export default BadgePartneo;
