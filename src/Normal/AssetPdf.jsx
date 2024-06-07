
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    textAlign: 'right',
  },
  companyInfo: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

const AssetPDF = ({ request, userData }) => {
  const { product, type, requestDate, approveDate, status } = request;
  const currentDate = new Date().toLocaleDateString();

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.companyInfo}>
          {userData && userData.logo && <Image style={styles.logo} src={userData.logo} />}
          <Text>{userData && userData.company}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Asset Information</Text>
          <Text>Product: {product}</Text>
          <Text>Type: {type}</Text>
          <Text>Request Date: {requestDate}</Text>
          <Text>Approve Date: {approveDate}</Text>
          <Text>Status: {status}</Text>
        </View>
        <View style={styles.date}>
          <Text>Printed on: {currentDate}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default AssetPDF;
