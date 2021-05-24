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
      <View style={styles.View_153_687}>
        <View style={styles.View_153_688} />
        <View style={styles.View_153_689}>
          <Text style={styles.Text_153_689}>Airbnb Solution</Text>
        </View>
        <View style={styles.View_153_690}>
          <Text style={styles.Text_153_690}>1</Text>
        </View>
        <View style={styles.View_153_691}>
          <Text style={styles.Text_153_691}>325</Text>
        </View>
      </View>
      <View style={styles.View_153_692}>
        <View style={styles.View_153_693} />
        <View style={styles.View_153_694}>
          <Text style={styles.Text_153_694}>Uber Solution</Text>
        </View>
        <View style={styles.View_153_695}>
          <Text style={styles.Text_153_695}>2</Text>
        </View>
        <View style={styles.View_153_696}>
          <Text style={styles.Text_153_696}>298</Text>
        </View>
      </View>
      <View style={styles.View_153_697}>
        <View style={styles.View_153_698} />
        <View style={styles.View_153_699}>
          <Text style={styles.Text_153_699}>Startup Solution</Text>
        </View>
        <View style={styles.View_153_700}>
          <Text style={styles.Text_153_700}>3</Text>
        </View>
        <View style={styles.View_153_701}>
          <Text style={styles.Text_153_701}>253</Text>
        </View>
      </View>
      <View style={styles.View_153_702}>
        <View style={styles.View_153_703} />
        <View style={styles.View_153_704}>
          <Text style={styles.Text_153_704}>Engineer Solution</Text>
        </View>
        <View style={styles.View_153_705}>
          <Text style={styles.Text_153_705}>4</Text>
        </View>
        <View style={styles.View_153_706}>
          <Text style={styles.Text_153_706}>209</Text>
        </View>
      </View>
      <View style={styles.View_153_707}>
        <View style={styles.View_153_708} />
        <View style={styles.View_153_709}>
          <Text style={styles.Text_153_709}>Designer Solution</Text>
        </View>
        <View style={styles.View_153_710}>
          <Text style={styles.Text_153_710}>5</Text>
        </View>
        <View style={styles.View_153_711}>
          <Text style={styles.Text_153_711}>187</Text>
        </View>
      </View>
      <View style={styles.View_153_712}>
        <View style={styles.View_153_713} />
        <View style={styles.View_153_714}>
          <Text style={styles.Text_153_714}>Solution</Text>
        </View>
        <View style={styles.View_153_715}>
          <Text style={styles.Text_153_715}>6</Text>
        </View>
        <View style={styles.View_153_716}>
          <Text style={styles.Text_153_716}>82</Text>
        </View>
      </View>
      <View style={styles.View_153_717}>
        <View style={styles.View_153_718} />
        <View style={styles.View_153_719}>
          <Text style={styles.Text_153_719}>Solution</Text>
        </View>
        <View style={styles.View_153_720}>
          <Text style={styles.Text_153_720}>7</Text>
        </View>
        <View style={styles.View_153_721}>
          <Text style={styles.Text_153_721}>65</Text>
        </View>
      </View>
      <View style={styles.View_153_722}>
        <View style={styles.View_153_723} />
        <View style={styles.View_153_724}>
          <Text style={styles.Text_153_724}>Solution</Text>
        </View>
        <View style={styles.View_153_725}>
          <Text style={styles.Text_153_725}>8</Text>
        </View>
        <View style={styles.View_153_726}>
          <Text style={styles.Text_153_726}>60</Text>
        </View>
      </View>
      <View style={styles.View_153_727}>
        <Text style={styles.Text_153_727}>Leaderboard</Text>
      </View>
      <View style={styles.View_153_730}>
        <Text style={styles.Text_153_730}>Problems</Text>
      </View>
      <View style={styles.View_153_731}>
        <Text style={styles.Text_153_731}>Solutions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/290f/757a/aaad00f7ce15d33156dfd529dc19d575"
        }}
        style={styles.ImageBackground_153_732}
      />
      <View style={styles.View_153_734}>
        <Text style={styles.Text_153_734}>Pitches</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_735}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_736}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_737}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_738}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_739}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_740}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_741}
      />
      <View style={styles.View_183_446}>
        <View style={styles.View_I183_446_183_2} />
        <View style={styles.View_I183_446_183_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9cb/609b/e8152c070ac291883ed1631414d94974"
            }}
            style={styles.ImageBackground_I183_446_183_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6729/d11e/fbfd9327287bf84a8d6bb05dbcffca4b"
          }}
          style={styles.ImageBackground_I183_446_183_16}
        />
        <View style={styles.View_I183_446_183_302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_I183_446_183_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_I183_446_183_304}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_153_687: {
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
  View_153_688: {
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
  View_153_689: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.459016393442621%")
  },
  Text_153_689: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_690: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.2786885245901622%")
  },
  Text_153_690: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_691: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.2786885245901622%")
  },
  Text_153_691: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_692: {
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
  View_153_693: {
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
  View_153_694: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426172%")
  },
  Text_153_694: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_695: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.2786885245901587%")
  },
  Text_153_695: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_696: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.2786885245901587%")
  },
  Text_153_696: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_697: {
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
  View_153_698: {
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
  View_153_699: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426172%")
  },
  Text_153_699: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_700: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.2786885245901587%")
  },
  Text_153_700: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_701: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.2786885245901587%")
  },
  Text_153_701: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_702: {
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
  View_153_703: {
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
  View_153_704: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_153_704: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_705: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590166%")
  },
  Text_153_705: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_706: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590166%")
  },
  Text_153_706: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_707: {
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
  View_153_708: {
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
  View_153_709: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426315%")
  },
  Text_153_709: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_710: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590173%")
  },
  Text_153_710: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_711: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590173%")
  },
  Text_153_711: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_712: {
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
  View_153_713: {
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
  View_153_714: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_153_714: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_715: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590166%")
  },
  Text_153_715: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_716: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590166%")
  },
  Text_153_716: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_717: {
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
  View_153_718: {
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
  View_153_719: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_153_719: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_720: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590166%")
  },
  Text_153_720: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_721: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590166%")
  },
  Text_153_721: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_722: {
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
  View_153_723: {
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
  View_153_724: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_153_724: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_725: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.27868852459018%")
  },
  Text_153_725: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_726: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.27868852459018%")
  },
  Text_153_726: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_727: {
    width: wp("69.86666666666666%"),
    minWidth: wp("69.86666666666666%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("12.158469945355192%")
  },
  Text_153_727: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_153_730: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("20.62841530054645%")
  },
  Text_153_730: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_153_731: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("20.62841530054645%")
  },
  Text_153_731: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_153_732: {
    width: wp("18.933333333333334%"),
    height: hp("0%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%")
  },
  View_153_734: {
    width: wp("14.666666666666666%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  Text_153_734: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_153_735: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_736: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("44.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_737: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_738: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("63.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_739: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("72.54098360655738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_740: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("81.83060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_741: {
    width: wp("89.33333333333333%"),
    height: hp("0%"),
    top: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_183_446: {
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
  View_I183_446_183_2: {
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
  View_I183_446_183_3: {
    flexGrow: 1,
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I183_446_183_4: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_446_183_16: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("3.961748633879779%")
  },
  View_I183_446_183_302: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_I183_446_183_303: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_446_183_304: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
