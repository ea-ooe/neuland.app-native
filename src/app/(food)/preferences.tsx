import MultiSectionRadio, {
    type FoodLanguageElement,
} from '@/components/Elements/Food/FoodLanguageSection'
import FormList from '@/components/Elements/Universal/FormList'
import MultiSectionPicker from '@/components/Elements/Universal/MultiSectionPicker'
import SingleSectionPicker from '@/components/Elements/Universal/SingleSectionPicker'
import { type Colors } from '@/stores/colors'
import { FoodFilterContext } from '@/stores/provider'
import { type FormListSections } from '@customTypes/components'
import { useTheme } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function FoodPreferences(): JSX.Element {
    const { t } = useTranslation('food')
    const elemtents = [
        { key: 'mensa', title: t('cards.titles.mensa', { ns: 'navigation' }) },
        {
            key: 'reimanns',
            title: t('cards.titles.reimanns', { ns: 'navigation' }),
        },
        {
            key: 'canisius',
            title: t('cards.titles.canisius', { ns: 'navigation' }),
        },
    ]

    const languages: FoodLanguageElement[] = [
        {
            key: 'default',
            title: t('preferences.languages.auto'),
        },
        { key: 'de', title: t('preferences.languages.de') },
        { key: 'en', title: t('preferences.languages.en') },
    ]
    const colors = useTheme().colors as Colors
    const router = useRouter()

    const {
        selectedRestaurants,
        toggleSelectedRestaurant,
        showStatic,
        toggleShowStatic,
        foodLanguage,
        toggleFoodLanguage,
    } = useContext(FoodFilterContext)

    const sections: FormListSections[] = [
        {
            header: 'Labels',
            items: [
                {
                    title: t('preferences.formlist.allergens'),
                    icon: 'chevron-forward-outline',
                    onPress: () => {
                        router.push('(food)/allergens')
                    },
                },
                {
                    title: t('preferences.formlist.flags'),
                    icon: 'chevron-forward-outline',
                    onPress: () => {
                        router.push('(food)/flags')
                    },
                },
            ],
        },
    ]

    const SectionView = ({
        title,
        children,
    }: {
        title: string
        children: JSX.Element
    }): JSX.Element => {
        return (
            <View style={[styles.sectionContainer, { marginTop: 16 }]}>
                <Text
                    style={[
                        styles.labelText,
                        {
                            color: colors.labelSecondaryColor,
                        },
                    ]}
                >
                    {title}
                </Text>
                <View
                    style={[
                        styles.sectionBox,
                        {
                            backgroundColor: colors.card,
                        },
                    ]}
                >
                    {children}
                </View>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <SectionView title={'Restaurants'}>
                    <MultiSectionPicker
                        elements={elemtents}
                        selectedItems={selectedRestaurants}
                        action={toggleSelectedRestaurant}
                    />
                </SectionView>
                <SectionView title={'Filter'}>
                    <SingleSectionPicker
                        title={t('preferences.formlist.static')}
                        selectedItem={showStatic}
                        action={toggleShowStatic}
                    />
                </SectionView>
                <View style={{ ...styles.sectionContainer, marginTop: 16 }}>
                    <FormList sections={sections} />
                </View>
                <SectionView title={t('preferences.formlist.language')}>
                    <MultiSectionRadio
                        elements={languages}
                        selectedItem={foodLanguage}
                        action={toggleFoodLanguage}
                    />
                </SectionView>
            </View>
            <View style={styles.notesBox}>
                <Text
                    style={[
                        styles.notesText,
                        {
                            color: colors.labelColor,
                        },
                    ]}
                >
                    {t('preferences.footer')}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    labelText: {
        fontSize: 12,
        fontWeight: 'normal',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    sectionContainer: {
        paddingHorizontal: 16,
        width: '100%',
        alignSelf: 'center',
    },
    sectionBox: {
        alignSelf: 'center',
        borderRadius: 8,
        width: '100%',
        marginTop: 2,
        justifyContent: 'center',
    },
    notesBox: {
        width: '92%',
        alignSelf: 'center',
        paddingBottom: 32,
    },
    notesText: {
        fontSize: 11,
        fontWeight: 'normal',
        paddingTop: 8,
        textAlign: 'left',
    },
})
