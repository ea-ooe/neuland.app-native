import Divider from '@/components/Elements/Universal/Divider'
import { type Colors } from '@/stores/colors'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface Element {
    title: string
    key: string
}

interface SectionPickerProps {
    elements: Element[]
    selectedItems: string[]
    action: (item: string) => void
}

/**
 * A component that renders a list of selectable items with a title and a checkmark icon.
 * @param {Element[]} elements - The list of selectable items.
 * @param {string[]} selectedItems - The list of selected items.
 * @param {(item: string) => void} action - The function to be called when an item is selected.
 * @returns {JSX.Element} - The MultiSectionPicker component.
 */
const MultiSectionPicker: React.FC<SectionPickerProps> = ({
    elements,
    selectedItems,
    action,
}) => {
    const colors = useTheme().colors as Colors

    return (
        <>
            {elements.map((item, index) => (
                <React.Fragment key={index}>
                    <Pressable
                        onPress={() => {
                            action(item.key)
                        }}
                        style={({ pressed }) => [
                            { opacity: pressed ? 0.8 : 1 },
                            { padding: 8 },
                        ]}
                    >
                        <View style={styles.container}>
                            <Text style={[styles.text, { color: colors.text }]}>
                                {item.title}
                            </Text>
                            {selectedItems.includes(item.key) ? (
                                <Ionicons
                                    name={'checkmark-sharp'}
                                    size={18}
                                    style={{
                                        marginRight: 8,
                                        alignSelf: 'center',
                                    }}
                                    color={colors.primary}
                                />
                            ) : (
                                <></>
                            )}
                        </View>
                    </Pressable>
                    {index < elements.length - 1 && (
                        <Divider color={colors.labelTertiaryColor} />
                    )}
                </React.Fragment>
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    text: {
        fontSize: 16,
        paddingVertical: 1,
    },
})

export default MultiSectionPicker
