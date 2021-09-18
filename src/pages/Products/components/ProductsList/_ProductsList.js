import styled from 'styled-components';
import { FiEdit3 } from 'react-icons/fi';
import { GrStatusCritical } from 'react-icons/gr';
import { BsFillEyeFill } from 'react-icons/bs';
import { RiAddCircleFill } from 'react-icons/ri';

export const EditIcon = styled(FiEdit3)`
  width: 1.8rem;
  height: 1.8rem;
`;
export const StatusIcon = styled(GrStatusCritical)`
  width: 1.8rem;
  height: 1.8rem;
`;
export const VisualizeIcon = styled(BsFillEyeFill)`
  width: 1.8rem;
  height: 1.8rem;
`;

export const AddProductIcon = styled(RiAddCircleFill)`
  width: 2.8rem;
  height: 2.8rem;
`;

export const FiltersWrapper = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    justify-content: space-between;
    padding: 15px 0;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
`;

export const SearchInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 215px;
  min-height: 45px;
  color: var(--blue);
  border-radius: 22px;
  border: 2px solid var(--blue);
  background: #fff;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px var(--blue);
  }
  &::placeholder {
    color: var(--gray);
  }

  @media (min-width: 470px) {
    max-width: 275px;
  }

  .anticon {
    font-size: 37px;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  min-height: 35px;
  color: var(--blue);
  border: unset;
  border-radius: 30px;
  padding: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--gray);
    font-family: 'Roboto';
  }
`;

export const PostsSection = styled.section`
  padding: 1em 0;
`;

export const PreRow = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;

  min-height: 55px;
  padding: 0px 15px;
  @media (min-width: 368px) {
    justify-content: space-between;
  }
`;

export const PostListTag = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  width: 215px;
  min-height: 55px;
  padding: 1px 12px;
  border-radius: 25px 25px 0 0px;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  background: var(--blue);

  .anticon {
    font-size: 40px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 105px;
  color: #3b3c3c;
  font-size: 18px;

  .anticon {
    cursor: pointer;
  }
`;

export const PageNumber = styled.span`
  cursor: pointer;
  text-decoration: ${(props) =>
    props.currentPage === 1 ? 'underline' : 'none'};
  text-decoration-color: var(--cyan);
`;

export const TableWrapper = styled.div`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
`;

export const Table = styled.table`
  width: 100%;

  vertical-align: middle;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;
  th,
  td {
    padding: 15px;
  }
  th {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--blue);
    text-align: center;
  }
  td {
    position: relative;
    font-size: 1.1rem;
    color: #000;
    padding-bottom: 3em;
    text-align: center;
  }
  p {
    margin-bottom: 0;
    font-size: 1rem;
  }
  tr {
    position: relative;
  }

  tbody tr:nth-child(odd) {
    background: rgba(136, 199, 162, 0.3);
  }

  @media (min-width: 768px) {
    td:first-child,
    th:first-child {
      padding-left: 30px;
    }

    td:last-child,
    th:last-child {
      padding-right: 30px;
    }
  }

  @media (max-width: 768px) {
    tbody,
    tr,
    td {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      text-align: right;
    }
    thead {
      display: none;
    }
    td {
      position: relative;
    }
    td:before {
      content: attr(data-label);
      color: #002e75;
      padding-right: 5px;
      text-align: left;
      font-weight: 600;
      width: 50%;
    }
  }
  @media (max-width: 568px) {
    td:before {
      position: relative;
      text-align: left;
    }
    td {
      text-align: left;
      padding: 15px 15px;
    }
  }
`;

export const PaginationRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  margin: 15px 15px 5em;
`;
