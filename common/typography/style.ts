import styled, { css } from "styled-components";

const fontStyle = css`
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
  color: ${({ theme }) => theme.colors.white};
  line-height: 120%;
`;
const TextBold10 = styled.h1`
  ${fontStyle}
  font-weight:700;
  font-size: ${({ theme }) => theme.fontSize.x10};
`;
const TextBold12 = styled.h1`
  ${fontStyle}
  font-weight:700;
  font-size: ${({ theme }) => theme.fontSize.x12};
`;
const TextBold14 = styled.h1`
  ${fontStyle}
  font-weight:700;
  font-size: ${({ theme }) => theme.fontSize.x14};
`;
const TextBold17 = styled.h1`
  ${fontStyle}
  font-weight:700;
  font-size: ${({ theme }) => theme.fontSize.x17};
`;
const TextBold20 = styled.h1`
  ${fontStyle}
  font-weight:700;
  font-size: ${({ theme }) => theme.fontSize.x20};
`;
const TextBold24 = styled.h1`
  ${fontStyle}
  font-weight:700;
  font-size: ${({ theme }) => theme.fontSize.x24};
`;
const TextBold29 = styled.h1`
  ${fontStyle}
  font-weight:700;
  font-size: ${({ theme }) => theme.fontSize.x29};
`;
const TextBold35 = styled.h1`
  ${fontStyle}
  font-weight:700;
  font-size: ${({ theme }) => theme.fontSize.x35};
`;
const TextRegular10 = styled.h1`
  ${fontStyle}
  font-weight:400;
  font-size: ${({ theme }) => theme.fontSize.x10};
`;
const TextRegular12 = styled.h1`
  ${fontStyle}
  font-weight:400;
  font-size: ${({ theme }) => theme.fontSize.x12};
`;
const TextRegular14 = styled.h1`
  ${fontStyle}
  font-weight:400;

  font-size: ${({ theme }) => theme.fontSize.x14};
`;
const TextRegular17 = styled.h1`
  ${fontStyle}
  font-weight:400;
  font-size: ${({ theme }) => theme.fontSize.x17};
`;
const TextRegular20 = styled.h1`
  ${fontStyle}
  font-weight:400;
  font-size: ${({ theme }) => theme.fontSize.x20};
`;
const TextRegular24 = styled.h1`
  ${fontStyle}
  font-weight:400;
  font-size: ${({ theme }) => theme.fontSize.x24};
`;
const TextRegular29 = styled.h1`
  ${fontStyle}
  font-weight:400;
  font-size: ${({ theme }) => theme.fontSize.x29};
`;
const TextRegular35 = styled.h1`
  ${fontStyle}
  font-weight:400;
  font-size: ${({ theme }) => theme.fontSize.x35};
`;
export {
  TextRegular35,
  TextRegular29,
  TextRegular24,
  TextRegular20,
  TextRegular17,
  TextRegular14,
  TextRegular12,
  TextRegular10,
  TextBold35,
  TextBold29,
  TextBold24,
  TextBold20,
  TextBold17,
  TextBold14,
  TextBold12,
  TextBold10,
};
