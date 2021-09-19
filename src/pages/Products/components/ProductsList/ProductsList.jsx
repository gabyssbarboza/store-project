import React, { useState } from 'react';
import { WrapperPage } from '../../../../shared/components/WrapperPages/WrapperPages';

import { useHistory } from 'react-router-dom';
import {
  FiltersWrapper,
  SearchInput,
  FilterGroup,
  SearchInputLabel,
  EditIcon,
  VisualizeIcon,
  StatusIcon,
  Pagination,
  PostListTag,
  PostsSection,
  PreRow,
  PageNumber,
  AddProductIcon,
  TableWrapper,
  Table,
  PaginationRow,
} from './_ProductsList';

export const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const history = useHistory();

  function handleAddProduct() {
    history.push('/adcionar-novo-produto');
  }

  function handleChangeProduct() {
    history.push('/alterar-produto');
  }

  function handleSeeProduct() {
    history.push('/visualizar-produto/x');
  }

  const handleRenderRow = () => {
    const itens = Array(10)
      .fill()
      .map((item) => (
        <>
          <tr>
            <td data-label="Código">
              <p>#00055</p>
            </td>
            <td data-label="Nome">
              <p>NomeProduto</p>
            </td>
            <td data-label="Quantidade">
              <p>5</p>
            </td>
            <td data-label="Status">
              <p>Ativo</p>
            </td>
            <td data-label="Alterar">
              <EditIcon onClick={() => handleChangeProduct()} />
            </td>
            <td data-label="Ativar/Desativar">
              <StatusIcon />
            </td>
            <td data-label="Visualizar" onClick={() => handleSeeProduct()}>
              <VisualizeIcon />
            </td>
          </tr>
        </>
      ));

    return <tbody>{itens}</tbody>;
  };

  return (
    <>
      <FiltersWrapper>
        <FilterGroup>
          <SearchInputLabel>
            <SearchInput placeholder="Buscar" />
          </SearchInputLabel>
          <AddProductIcon onClick={() => handleAddProduct()} />
        </FilterGroup>
      </FiltersWrapper>

      <PostsSection>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>codProd</th>
                <th>Nome</th>
                <th>Qtd</th>
                <th>Status</th>
                <th>Alterar</th>
                <th>Ativar/Desativar</th>
                <th>Visualizar</th>
              </tr>
            </thead>
            {handleRenderRow()}
          </Table>
        </TableWrapper>
      </PostsSection>
    </>
  );
};
