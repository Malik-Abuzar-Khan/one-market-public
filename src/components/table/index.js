import React, { useState } from "react";
import { styles, rowCellSizes } from "./styles";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Table, Row } from "react-native-table-component";
import RowItem from "./custom-row";
import { deleteProduct } from "./services";
import Loader from "../app_loader";

const HeadTable = ["Product", "Product Name", "Update", "Delete"];

export default function TableComp({ products }) {
  const [deleteBtnloader, setDeleteBtnloader] = useState(false);
  return (
    <View style={styles.container}>
      <Table borderStyle={styles.borderStyle}>
        <Row
          data={HeadTable}
          style={styles.HeadStyle}
          widthArr={rowCellSizes}
          textStyle={styles.itemsHeadingRowText}
        />
        <ScrollView style={{ ...styles.scrollViewHeight, ...styles.fullWidth }}>
          {products?.map(
            ({ productName, productDescription, token, docId }) => (
              <TouchableOpacity key={docId}>
                <RowItem
                  productName={productName}
                  productDescription={productDescription}
                  deleteIconOnPress={() =>
                    deleteProduct(token, docId, setDeleteBtnloader)
                  }
                  deleteBtnloader={deleteBtnloader}
                />
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      </Table>
    </View>
  );
}
