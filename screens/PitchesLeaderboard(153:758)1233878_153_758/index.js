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
      <View style={styles.View_153_759}>
        <View style={styles.View_153_760} />
        <View style={styles.View_153_761}>
          <Text style={styles.Text_153_761}>Airbnb Pitch</Text>
        </View>
        <View style={styles.View_153_762}>
          <Text style={styles.Text_153_762}>1</Text>
        </View>
        <View style={styles.View_153_763}>
          <Text style={styles.Text_153_763}>325</Text>
        </View>
      </View>
      <View style={styles.View_153_764}>
        <View style={styles.View_153_765} />
        <View style={styles.View_153_766}>
          <Text style={styles.Text_153_766}>Uber Pitch</Text>
        </View>
        <View style={styles.View_153_767}>
          <Text style={styles.Text_153_767}>2</Text>
        </View>
        <View style={styles.View_153_768}>
          <Text style={styles.Text_153_768}>298</Text>
        </View>
      </View>
      <View style={styles.View_153_769}>
        <View style={styles.View_153_770} />
        <View style={styles.View_153_771}>
          <Text style={styles.Text_153_771}>Startup Pitch</Text>
        </View>
        <View style={styles.View_153_772}>
          <Text style={styles.Text_153_772}>3</Text>
        </View>
        <View style={styles.View_153_773}>
          <Text style={styles.Text_153_773}>253</Text>
        </View>
      </View>
      <View style={styles.View_153_774}>
        <View style={styles.View_153_775} />
        <View style={styles.View_153_776}>
          <Text style={styles.Text_153_776}>Engineer Pitch</Text>
        </View>
        <View style={styles.View_153_777}>
          <Text style={styles.Text_153_777}>4</Text>
        </View>
        <View style={styles.View_153_778}>
          <Text style={styles.Text_153_778}>209</Text>
        </View>
      </View>
      <View style={styles.View_153_779}>
        <View style={styles.View_153_780} />
        <View style={styles.View_153_781}>
          <Text style={styles.Text_153_781}>Designer Pitch</Text>
        </View>
        <View style={styles.View_153_782}>
          <Text style={styles.Text_153_782}>5</Text>
        </View>
        <View style={styles.View_153_783}>
          <Text style={styles.Text_153_783}>187</Text>
        </View>
      </View>
      <View style={styles.View_153_784}>
        <View style={styles.View_153_785} />
        <View style={styles.View_153_786}>
          <Text style={styles.Text_153_786}>Pitch</Text>
        </View>
        <View style={styles.View_153_787}>
          <Text style={styles.Text_153_787}>6</Text>
        </View>
        <View style={styles.View_153_788}>
          <Text style={styles.Text_153_788}>82</Text>
        </View>
      </View>
      <View style={styles.View_153_789}>
        <View style={styles.View_153_790} />
        <View style={styles.View_153_791}>
          <Text style={styles.Text_153_791}>Pitch</Text>
        </View>
        <View style={styles.View_153_792}>
          <Text style={styles.Text_153_792}>7</Text>
        </View>
        <View style={styles.View_153_793}>
          <Text style={styles.Text_153_793}>65</Text>
        </View>
      </View>
      <View style={styles.View_153_794}>
        <View style={styles.View_153_795} />
        <View style={styles.View_153_796}>
          <Text style={styles.Text_153_796}>Pitch</Text>
        </View>
        <View style={styles.View_153_797}>
          <Text style={styles.Text_153_797}>8</Text>
        </View>
        <View style={styles.View_153_798}>
          <Text style={styles.Text_153_798}>60</Text>
        </View>
      </View>
      <View style={styles.View_153_799}>
        <Text style={styles.Text_153_799}>Leaderboard</Text>
      </View>
      <View style={styles.View_153_802}>
        <Text style={styles.Text_153_802}>Problems</Text>
      </View>
      <View style={styles.View_153_803}>
        <Text style={styles.Text_153_803}>Solutions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c5/ca2a/8b63b7cd55a40a489ddce82e5cd4d642"
        }}
        style={styles.ImageBackground_153_804}
      />
      <View style={styles.View_153_806}>
        <Text style={styles.Text_153_806}>Pitches</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_807}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_808}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_809}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_810}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_811}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_812}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/e782/5059fa22c70b85aa255a9c7e5c2ed3b4"
        }}
        style={styles.ImageBackground_153_813}
      />
      <View style={styles.View_183_457}>
        <View style={styles.View_I183_457_183_2} />
        <View style={styles.View_I183_457_183_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9cb/609b/e8152c070ac291883ed1631414d94974"
            }}
            style={styles.ImageBackground_I183_457_183_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6729/d11e/fbfd9327287bf84a8d6bb05dbcffca4b"
          }}
          style={styles.ImageBackground_I183_457_183_16}
        />
        <View style={styles.View_I183_457_183_302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_I183_457_183_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_I183_457_183_304}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_153_759: {
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
  View_153_760: {
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
  View_153_761: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.459016393442621%")
  },
  Text_153_761: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_762: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.2786885245901622%")
  },
  Text_153_762: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_763: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.2786885245901622%")
  },
  Text_153_763: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_764: {
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
  View_153_765: {
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
  View_153_766: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426172%")
  },
  Text_153_766: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_767: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.2786885245901587%")
  },
  Text_153_767: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_768: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.2786885245901587%")
  },
  Text_153_768: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_769: {
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
  View_153_770: {
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
  View_153_771: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426172%")
  },
  Text_153_771: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_772: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.2786885245901587%")
  },
  Text_153_772: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_773: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.2786885245901587%")
  },
  Text_153_773: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_774: {
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
  View_153_775: {
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
  View_153_776: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_153_776: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_777: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590166%")
  },
  Text_153_777: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_778: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590166%")
  },
  Text_153_778: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_779: {
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
  View_153_780: {
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
  View_153_781: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426315%")
  },
  Text_153_781: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_782: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590173%")
  },
  Text_153_782: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_783: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590173%")
  },
  Text_153_783: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_784: {
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
  View_153_785: {
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
  View_153_786: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_153_786: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_787: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590166%")
  },
  Text_153_787: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_788: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590166%")
  },
  Text_153_788: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_789: {
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
  View_153_790: {
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
  View_153_791: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_153_791: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_792: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.278688524590166%")
  },
  Text_153_792: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_793: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.278688524590166%")
  },
  Text_153_793: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_794: {
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
  View_153_795: {
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
  View_153_796: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("2.4590163934426243%")
  },
  Text_153_796: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8,
    textTransform: "none"
  },
  View_153_797: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("3.27868852459018%")
  },
  Text_153_797: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_798: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("3.27868852459018%")
  },
  Text_153_798: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_799: {
    width: wp("69.86666666666666%"),
    minWidth: wp("69.86666666666666%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("12.158469945355192%")
  },
  Text_153_799: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_153_802: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("20.62841530054645%")
  },
  Text_153_802: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_153_803: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("20.62841530054645%")
  },
  Text_153_803: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_153_804: {
    width: wp("14.666666666666666%"),
    height: hp("0%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  View_153_806: {
    width: wp("14.666666666666666%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  Text_153_806: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_153_807: {
    width: wp("89.33333333333333%"),
    height: hp("1.5530988759783612e-14%"),
    top: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_808: {
    width: wp("89.33333333333333%"),
    height: hp("1.5530988759783612e-14%"),
    top: hp("44.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_809: {
    width: wp("89.33333333333333%"),
    height: hp("7.765494379891806e-15%"),
    top: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_810: {
    width: wp("89.33333333333333%"),
    height: hp("7.765494379891806e-15%"),
    top: hp("63.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_811: {
    width: wp("89.33333333333333%"),
    height: hp("7.765494379891806e-15%"),
    top: hp("72.54098360655738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_812: {
    width: wp("89.33333333333333%"),
    height: hp("7.765494379891806e-15%"),
    top: hp("81.83060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  ImageBackground_153_813: {
    width: wp("89.33333333333333%"),
    height: hp("1.1648241569837708e-14%"),
    top: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_183_457: {
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
  View_I183_457_183_2: {
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
  View_I183_457_183_3: {
    flexGrow: 1,
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I183_457_183_4: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_457_183_16: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("3.961748633879779%")
  },
  View_I183_457_183_302: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_I183_457_183_303: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_457_183_304: {
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
