import React from "react";
import { Collapse } from "@react-md/transition";
import { Card, CardHeader, CardTitle, CardSubtitle } from "@react-md/card";
import { Avatar } from "@react-md/avatar";
import { useToggle } from "@react-md/utils";
import { Button } from "@react-md/button";
import { IconRotator } from "@react-md/icon";
import { KeyboardArrowDownSVGIcon } from "@react-md/material-icons";
import { List, ListItem } from "@react-md/list";
import { MediaContainer } from "@react-md/media";
import Container from "@/components/atoms/Container";
import Link from "next/link";

type Props = any;

export const ContesntsCard: React.VFC<Props> = (props) => {
  const { pokemon, pokemonJaNameList, id, imageId } = props;
  // const pokemonImage = pokemon.sprites.front_default;
  const [expanded, , , toggle] = useToggle(false);
  return (
    <Container centered>
      <Card>
        <Link href={`pokemon/${pokemon.id}`}>
          <MediaContainer fullWidth>
            <img src={pokemon.sprites.front_default} alt="Profile" />
          </MediaContainer>
        </Link>
        <CardHeader
          beforeChildren={
            <Avatar>
              <img src={pokemon.sprites.front_default} alt="Avatar" />
            </Avatar>
          }
          afterChildren={
            <Button
              id="expand-card-button"
              onClick={toggle}
              buttonType="icon"
              aria-label="Expand"
              theme="clear"
            >
              <IconRotator rotated={expanded}>
                <KeyboardArrowDownSVGIcon />
              </IconRotator>
            </Button>
          }
        >
          <CardTitle>{pokemon.name}</CardTitle>
          <CardSubtitle>
            {pokemon.types.length === 1
              ? pokemon.types[0].type.name
              : `${pokemon.types[0].type.name}・${pokemon.types[1].type.name}`}
          </CardSubtitle>
        </CardHeader>
        <Collapse collapsed={!expanded}>
          <List>
            {pokemon.stats.map((value) => (
              <ListItem
                leftAddon={value.stat.name}
                rightAddon={value.base_stat}
              >
                (000) 000-0000
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Card>
    </Container>
  );
};
