import { Container, Row, Col, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../../styles/homepage/pokemon-ranking.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { POKEMON_CHAMPIONS_PROFILE } from "../../constants/pokemon_champions_profile";
import imgMasterBall from "../../images/pokemon/masterball.png";

const EV_BAR_MAX = 32;
const EV_BAR_SEGMENTS = 32;

const MODAL_STACKED_MQ = "(max-width: 1199px)";

function StatEvBarSegments({ ev }) {
	const n = Number(ev);
	const lit = Math.min(
		EV_BAR_SEGMENTS,
		Math.max(0, Math.round((n / EV_BAR_MAX) * EV_BAR_SEGMENTS))
	);
	return (
		<div
			className="pokemon-profile-modal__stat-ev-segments"
			role="img"
			aria-label={`${ev} of ${EV_BAR_MAX} EV`}
		>
			{Array.from({ length: EV_BAR_SEGMENTS }, (_, i) => (
				<span
					key={i}
					className={`pokemon-profile-modal__stat-ev-segment${i < lit ? " is-lit" : ""}`}
				/>
			))}
		</div>
	);
}

function PokemonModalMovesPanel({ active, selectedMove, selectedMoveIndex, setSelectedMoveIndex }) {
	return (
		<div
			id="pokemon-panel-moves"
			role="tabpanel"
			aria-labelledby="pokemon-tab-moves"
			className="pokemon-profile-modal__panel"
		>
			<div className="pokemon-profile-modal__table-wrap">
				<table className="pokemon-profile-modal__move-table">
					<thead>
						<tr>
							<th scope="col">Move</th>
						</tr>
					</thead>
					<tbody>
						{active.moves.map((move, i) => (
							<tr
								key={move.name}
								className={
									i === selectedMoveIndex
										? "pokemon-profile-modal__move-row is-selected"
										: "pokemon-profile-modal__move-row"
								}
								onClick={() => setSelectedMoveIndex(i)}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										setSelectedMoveIndex(i);
									}
								}}
								tabIndex={0}
								role="button"
								aria-pressed={i === selectedMoveIndex}
								aria-label={`Select move ${move.name}`}
							>
								<td>{move.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{selectedMove && (
				<div className="pokemon-profile-modal__move-detail">
					<h4 className="pokemon-profile-modal__move-detail-title">{selectedMove.name}</h4>
					<dl className="pokemon-profile-modal__move-detail-dl">
						<div className="pokemon-profile-modal__move-detail-row">
							<dt>Category</dt>
							<dd>{selectedMove.category}</dd>
						</div>
						<div className="pokemon-profile-modal__move-detail-row">
							<dt>Type</dt>
							<dd>{selectedMove.type}</dd>
						</div>
						<div className="pokemon-profile-modal__move-detail-row">
							<dt>Power</dt>
							<dd>{selectedMove.power}</dd>
						</div>
						<div className="pokemon-profile-modal__move-detail-row">
							<dt>Accuracy</dt>
							<dd>{selectedMove.accuracy}</dd>
						</div>
					</dl>
				</div>
			)}
		</div>
	);
}

function PokemonModalStatsPanel({ active }) {
	return (
		<div
			id="pokemon-panel-stats"
			role="tabpanel"
			aria-labelledby="pokemon-tab-stats"
			className="pokemon-profile-modal__panel pokemon-profile-modal__panel--stats"
		>
			{active.statsNote && <p className="pokemon-profile-modal__stats-note">{active.statsNote}</p>}
			<div
				className="pokemon-profile-modal__table-wrap pokemon-profile-modal__stats-dl-wrap"
				id="pokemon-stats-list"
			>
				<div className="pokemon-profile-modal__stats-head pokemon-profile-modal__stat-row pokemon-profile-modal__stat-row--head">
					<span className="pokemon-profile-modal__stat-cell pokemon-profile-modal__stat-cell--label">Stat</span>
					<span className="pokemon-profile-modal__stat-cell pokemon-profile-modal__stat-cell--total">Total</span>
					<span
						className="pokemon-profile-modal__stat-cell pokemon-profile-modal__stat-cell--bar pokemon-profile-modal__stat-cell--bar-head"
						aria-hidden="true"
					/>
					<span className="pokemon-profile-modal__stat-cell pokemon-profile-modal__stat-cell--ev">EV</span>
				</div>
				<div className="pokemon-profile-modal__stats">
					{active.totalStats.map((t, i) => {
						const ev = active.evSpread[i]?.value ?? 0;
						return (
							<div key={t.label} className="pokemon-profile-modal__stat-row" role="row">
								<span className="pokemon-profile-modal__stat-cell pokemon-profile-modal__stat-cell--label">
									{t.label}
								</span>
								<span
									className="pokemon-profile-modal__stat-cell pokemon-profile-modal__stat-cell--total"
									title={`${t.label} total`}
								>
									{t.value}
								</span>
								<div className="pokemon-profile-modal__stat-cell pokemon-profile-modal__stat-cell--bar">
									<StatEvBarSegments ev={ev} />
								</div>
								<span className="pokemon-profile-modal__stat-cell pokemon-profile-modal__stat-cell--ev">{ev}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

function PokemonModalSummaryAside({ active }) {
	return (
		<div className="pokemon-profile-modal__aside-inner">
			<div className="pokemon-profile-modal__aside-img-wrap">
				<img src={active.image} alt={active.name} />
			</div>
			<div className="pokemon-profile-modal__field">
				<span className="pokemon-profile-modal__label">Name</span>
				<span className="pokemon-profile-modal__value">{active.name}</span>
			</div>
			{active.types?.length > 0 && (
				<div className="pokemon-profile-modal__field">
					<span className="pokemon-profile-modal__label">Type</span>
					<div className="pokemon-profile-modal__types">
						{active.types.map((typeName) => (
							<span
								key={typeName}
								className={`pokemon-profile-modal__type pokemon-profile-modal__type--${typeName.toLowerCase()}`}
							>
								{typeName}
							</span>
						))}
					</div>
				</div>
			)}
			<div className="pokemon-profile-modal__field">
				<span className="pokemon-profile-modal__label">Nature</span>
				<span className="pokemon-profile-modal__value">{active.nature}</span>
			</div>
			<div className="pokemon-profile-modal__field">
				<span className="pokemon-profile-modal__label">Held item</span>
				<span className="pokemon-profile-modal__value">{active.heldItem}</span>
			</div>
			{active.ability && (
				<div className="pokemon-profile-modal__field">
					<span className="pokemon-profile-modal__label">Ability</span>
					<span className="pokemon-profile-modal__value">{active.ability}</span>
				</div>
			)}
		</div>
	);
}

export const PokemonChampionsRanking = () => {
	const [activeSlug, setActiveSlug] = useState(null);
	const [modalTab, setModalTab] = useState("moves");
	const [selectedMoveIndex, setSelectedMoveIndex] = useState(0);
	const [modalStacked, setModalStacked] = useState(() =>
		typeof window !== "undefined" ? window.matchMedia(MODAL_STACKED_MQ).matches : false
	);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	useEffect(() => {
		const mq = window.matchMedia(MODAL_STACKED_MQ);
		const onChange = () => setModalStacked(mq.matches);
		onChange();
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);

	useEffect(() => {
		if (activeSlug) {
			const stacked = window.matchMedia(MODAL_STACKED_MQ).matches;
			setModalTab(stacked ? "summary" : "moves");
			setSelectedMoveIndex(0);
		}
	}, [activeSlug]);

	useEffect(() => {
		if (!modalStacked && modalTab === "summary") {
			setModalTab("moves");
		}
	}, [modalStacked, modalTab]);

	const active = POKEMON_CHAMPIONS_PROFILE.find((p) => p.slug === activeSlug) ?? null;
	const showModal = active !== null;

	const closeModal = () => setActiveSlug(null);

	const selectedMove =
		active && active.moves.length > 0
			? active.moves[Math.min(selectedMoveIndex, active.moves.length - 1)]
			: null;

	return (
		<section className="pokemon-ranking" id="pokemon-champions">
			<Container>
				<h1 data-aos="fade-in">Pokemon Champions Team</h1>
				<Row className="pokemon-ranking__row gx-4 gx-xl-5">
					<Col xs={12} xl={4} className="pokemon-ranking__left">
						<div className="pokemon-ranking__rating">
							<div className="pokemon-ranking__rating-badge" data-aos="fade-in" data-aos-delay="100">
								<img src={imgMasterBall} alt="" aria-hidden />
							</div>
							<p className="pokemon-ranking__rating-tier" data-aos="fade-in" data-aos-delay="150">
								Master Ball Tier | Rank 3
							</p>
							<p className="pokemon-ranking__rating-detail" data-aos="fade-in" data-aos-delay="220">
								12,903 world ranking
							</p>
						</div>
					</Col>
					<Col xs={12} xl={8} className="pokemon-ranking__cards-col">
						<div className="pokemon-ranking__grid">
							{POKEMON_CHAMPIONS_PROFILE.map((mon, i) => (
								<button
									type="button"
									key={mon.slug}
									className="pokemon-ranking__card"
									data-aos="fade-up"
									data-aos-delay={100 + i * 80}
									aria-label={`Open ${mon.name} profile`}
									onClick={() => setActiveSlug(mon.slug)}
								>
									<div className="pokemon-ranking__card-img-wrap">
										<img src={mon.image} alt="" aria-hidden />
									</div>
									<span className="pokemon-ranking__card-name">{mon.name}</span>
								</button>
							))}
						</div>
					</Col>
				</Row>
			</Container>

			<Modal
				show={showModal}
				onHide={closeModal}
				centered
				size="lg"
				className="pokemon-profile-modal"
				contentClassName="pokemon-profile-modal__content"
				dialogClassName="pokemon-profile-modal__dialog"
				backdropClassName="pokemon-profile-modal__backdrop"
			>
				{active && (
					<>
						<Modal.Header closeButton closeVariant="white">
							<Modal.Title as="h2" className="pokemon-profile-modal__title">
								{active.name}
							</Modal.Title>
						</Modal.Header>
						<Modal.Body
							className={`pokemon-profile-modal__body${
								modalStacked ? " pokemon-profile-modal__body--stacked" : ""
							}`}
						>
							{modalStacked ? (
								<>
									<div
										className="pokemon-profile-modal__tablist pokemon-profile-modal__tablist--three"
										role="tablist"
										aria-label="Profile sections"
									>
										<button
											type="button"
											role="tab"
											id="pokemon-tab-summary"
											className={`pokemon-profile-modal__tab${modalTab === "summary" ? " is-active" : ""}`}
											aria-selected={modalTab === "summary"}
											aria-controls="pokemon-panel-summary"
											onClick={() => setModalTab("summary")}
										>
											Summary
										</button>
										<button
											type="button"
											role="tab"
											id="pokemon-tab-moves"
											className={`pokemon-profile-modal__tab${modalTab === "moves" ? " is-active" : ""}`}
											aria-selected={modalTab === "moves"}
											aria-controls="pokemon-panel-moves"
											onClick={() => setModalTab("moves")}
										>
											Moves
										</button>
										<button
											type="button"
											role="tab"
											id="pokemon-tab-stats"
											className={`pokemon-profile-modal__tab${modalTab === "stats" ? " is-active" : ""}`}
											aria-selected={modalTab === "stats"}
											aria-controls="pokemon-panel-stats"
											onClick={() => setModalTab("stats")}
										>
											Stats
										</button>
									</div>
									{modalTab === "summary" && (
										<div
											id="pokemon-panel-summary"
											role="tabpanel"
											aria-labelledby="pokemon-tab-summary"
											className="pokemon-profile-modal__panel pokemon-profile-modal__panel--summary"
										>
											<PokemonModalSummaryAside active={active} />
										</div>
									)}
									{modalTab === "moves" && (
										<PokemonModalMovesPanel
											active={active}
											selectedMove={selectedMove}
											selectedMoveIndex={selectedMoveIndex}
											setSelectedMoveIndex={setSelectedMoveIndex}
										/>
									)}
									{modalTab === "stats" && <PokemonModalStatsPanel active={active} />}
								</>
							) : (
								<Row className="g-4 g-lg-5">
									<Col xs={12} md={7} className="order-2 order-md-1 pokemon-profile-modal__main">
										<div className="pokemon-profile-modal__tablist" role="tablist" aria-label="Profile sections">
											<button
												type="button"
												role="tab"
												id="pokemon-tab-moves"
												className={`pokemon-profile-modal__tab${modalTab === "moves" ? " is-active" : ""}`}
												aria-selected={modalTab === "moves"}
												aria-controls="pokemon-panel-moves"
												onClick={() => setModalTab("moves")}
											>
												Moves
											</button>
											<button
												type="button"
												role="tab"
												id="pokemon-tab-stats"
												className={`pokemon-profile-modal__tab${modalTab === "stats" ? " is-active" : ""}`}
												aria-selected={modalTab === "stats"}
												aria-controls="pokemon-panel-stats"
												onClick={() => setModalTab("stats")}
											>
												Stats
											</button>
										</div>
										{modalTab === "moves" && (
											<PokemonModalMovesPanel
												active={active}
												selectedMove={selectedMove}
												selectedMoveIndex={selectedMoveIndex}
												setSelectedMoveIndex={setSelectedMoveIndex}
											/>
										)}
										{modalTab === "stats" && <PokemonModalStatsPanel active={active} />}
									</Col>
									<Col xs={12} md={5} className="order-1 order-md-2 pokemon-profile-modal__aside">
										<PokemonModalSummaryAside active={active} />
									</Col>
								</Row>
							)}
						</Modal.Body>
					</>
				)}
			</Modal>
		</section>
	);
};
