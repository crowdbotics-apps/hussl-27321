import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_148_1391}>
        <View style={styles.View_148_1392} />
        <View style={styles.View_148_1393}>
          <Text style={styles.Text_148_1393}>Airbnb Problem</Text>
        </View>
        <View style={styles.View_148_1394}>
          <Text style={styles.Text_148_1394}>1</Text>
        </View>
        <View style={styles.View_148_1395}>
          <Text style={styles.Text_148_1395}>325</Text>
        </View>
      </View>
      <View style={styles.View_148_1396}>
        <View style={styles.View_148_1397} />
        <View style={styles.View_148_1398}>
          <Text style={styles.Text_148_1398}>Uber Problem</Text>
        </View>
        <View style={styles.View_148_1399}>
          <Text style={styles.Text_148_1399}>2</Text>
        </View>
        <View style={styles.View_148_1400}>
          <Text style={styles.Text_148_1400}>298</Text>
        </View>
      </View>
      <View style={styles.View_148_1401}>
        <View style={styles.View_148_1402} />
        <View style={styles.View_148_1403}>
          <Text style={styles.Text_148_1403}>Startup Problem</Text>
        </View>
        <View style={styles.View_148_1404}>
          <Text style={styles.Text_148_1404}>3</Text>
        </View>
        <View style={styles.View_148_1405}>
          <Text style={styles.Text_148_1405}>253</Text>
        </View>
      </View>
      <View style={styles.View_148_1406}>
        <View style={styles.View_148_1407} />
        <View style={styles.View_148_1408}>
          <Text style={styles.Text_148_1408}>Engineer Problem</Text>
        </View>
        <View style={styles.View_148_1409}>
          <Text style={styles.Text_148_1409}>4</Text>
        </View>
        <View style={styles.View_148_1410}>
          <Text style={styles.Text_148_1410}>209</Text>
        </View>
      </View>
      <View style={styles.View_148_1411}>
        <View style={styles.View_148_1412} />
        <View style={styles.View_148_1413}>
          <Text style={styles.Text_148_1413}>Designer Problem</Text>
        </View>
        <View style={styles.View_148_1414}>
          <Text style={styles.Text_148_1414}>5</Text>
        </View>
        <View style={styles.View_148_1415}>
          <Text style={styles.Text_148_1415}>187</Text>
        </View>
      </View>
      <View style={styles.View_148_1416}>
        <View style={styles.View_148_1417} />
        <View style={styles.View_148_1418}>
          <Text style={styles.Text_148_1418}>Problem</Text>
        </View>
        <View style={styles.View_148_1419}>
          <Text style={styles.Text_148_1419}>6</Text>
        </View>
        <View style={styles.View_148_1420}>
          <Text style={styles.Text_148_1420}>82</Text>
        </View>
      </View>
      <View style={styles.View_148_1421}>
        <View style={styles.View_148_1422} />
        <View style={styles.View_148_1423}>
          <Text style={styles.Text_148_1423}>Problem</Text>
        </View>
        <View style={styles.View_148_1424}>
          <Text style={styles.Text_148_1424}>7</Text>
        </View>
        <View style={styles.View_148_1425}>
          <Text style={styles.Text_148_1425}>65</Text>
        </View>
      </View>
      <View style={styles.View_148_1426}>
        <View style={styles.View_148_1427} />
        <View style={styles.View_148_1428}>
          <Text style={styles.Text_148_1428}>Problem</Text>
        </View>
        <View style={styles.View_148_1429}>
          <Text style={styles.Text_148_1429}>8</Text>
        </View>
        <View style={styles.View_148_1430}>
          <Text style={styles.Text_148_1430}>60</Text>
        </View>
      </View>
      <View style={styles.View_148_1434}>
        <Text style={styles.Text_148_1434}>Problems</Text>
      </View>
      <View style={styles.View_148_1435}>
        <Text style={styles.Text_148_1435}>Solutions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dd4/297b/c5f800e1abb10640148322509456bcba"
        }}
        style={styles.ImageBackground_148_1436}
      />
      <View style={styles.View_148_1438}>
        <Text style={styles.Text_148_1438}>Pitches</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_148_1439}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_148_1440}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_148_1441}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_148_1442}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_148_1443}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_148_1444}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_148_1445}
      />
      <View style={styles.View_183_397}>
        <View style={styles.View_I183_397_183_2} />
        <View style={styles.View_I183_397_183_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9cb/609b/e8152c070ac291883ed1631414d94974"
            }}
            style={styles.ImageBackground_I183_397_183_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6729/d11e/fbfd9327287bf84a8d6bb05dbcffca4b"
          }}
          style={styles.ImageBackground_I183_397_183_16}
        />
        <View style={styles.View_I183_397_183_302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_I183_397_183_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_I183_397_183_304}
          />
        </View>
      </View>
      <View style={styles.View_148_1431}>
        <Text style={styles.Text_148_1431}>Leaderboard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61e/e9c0/d187098a1363bad1307f336697e12e63"
        }}
        style={styles.ImageBackground_183_440}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_148_1391: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("26.639344262295083%")
  },
  View_148_1392: {
    width: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1393: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.459016393442621%")
  },
  Text_148_1393: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_148_1394: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.2786885245901622%")
  },
  Text_148_1394: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1395: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.2786885245901622%")
  },
  Text_148_1395: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1396: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("35.92896174863388%")
  },
  View_148_1397: {
    width: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1398: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426172%")
  },
  Text_148_1398: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_148_1399: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.2786885245901587%")
  },
  Text_148_1399: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1400: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.2786885245901587%")
  },
  Text_148_1400: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1401: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("45.21857923497268%")
  },
  View_148_1402: {
    width: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1403: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426172%")
  },
  Text_148_1403: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_148_1404: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.2786885245901587%")
  },
  Text_148_1404: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1405: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.2786885245901587%")
  },
  Text_148_1405: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1406: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("54.50819672131148%")
  },
  View_148_1407: {
    width: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1408: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_148_1408: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_148_1409: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590166%")
  },
  Text_148_1409: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1410: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590166%")
  },
  Text_148_1410: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1411: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("63.79781420765027%")
  },
  View_148_1412: {
    width: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1413: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426315%")
  },
  Text_148_1413: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_148_1414: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590173%")
  },
  Text_148_1414: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1415: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590173%")
  },
  Text_148_1415: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1416: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("73.08743169398907%")
  },
  View_148_1417: {
    width: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1418: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_148_1418: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_148_1419: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590166%")
  },
  Text_148_1419: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1420: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590166%")
  },
  Text_148_1420: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1421: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("82.37704918032787%")
  },
  View_148_1422: {
    width: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1423: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_148_1423: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_148_1424: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590166%")
  },
  Text_148_1424: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1425: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590166%")
  },
  Text_148_1425: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1426: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("91.66666666666666%")
  },
  View_148_1427: {
    width: wp("86.13333333333333%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1428: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_148_1428: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_148_1429: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.27868852459018%")
  },
  Text_148_1429: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1430: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.27868852459018%")
  },
  Text_148_1430: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1434: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("20.62841530054645%")
  },
  Text_148_1434: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_1435: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("20.62841530054645%")
  },
  Text_148_1435: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_148_1436: {
    width: wp("19.2%"),
    height: hp("0%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%")
  },
  View_148_1438: {
    width: wp("14.666666666666666%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  Text_148_1438: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_148_1439: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_148_1440: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("44.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_148_1441: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_148_1442: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("63.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_148_1443: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("72.54098360655738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_148_1444: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("81.83060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_148_1445: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_183_397: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("99.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_397_183_2: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I183_397_183_3: {
    flexGrow: 1,
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I183_397_183_4: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_397_183_16: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("3.961748633879779%")
  },
  View_I183_397_183_302: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_I183_397_183_303: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_397_183_304: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  View_148_1431: {
    width: wp("69.86666666666666%"),
    minWidth: wp("69.86666666666666%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("12.158469945355192%")
  },
  Text_148_1431: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  ImageBackground_183_440: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("12.158469945355192%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
